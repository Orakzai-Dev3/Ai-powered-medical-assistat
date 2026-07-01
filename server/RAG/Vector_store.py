from pinecone import Pinecone ,ServerlessSpec
import os
from dotenv import load_dotenv
from tqdm import tqdm
load_dotenv()
import time
from pathlib import Path
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from .Text_splitter import get_chunks

PINECONE_INDEX_NAME = os.getenv('PINECONE_INDEX_NAME')
PINECONE_ENV = os.getenv('PINECONE_ENV')
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
UPLOAD_DIR = Path('./uploaded_doc')
os.makedirs(UPLOAD_DIR, exist_ok=True)


pc = Pinecone(api_key=os.getenv('PINECONE_API_KEY'), environment='us-west1-gcp')
spec = ServerlessSpec(cloud='aws',region=PINECONE_ENV)
existing_indexes =[i['name'] for i in pc.list_indexes()]

if PINECONE_INDEX_NAME not in existing_indexes:
    pc.create_index(
        name=PINECONE_INDEX_NAME,
        dimension=3072,
        metric='dotproduct',
        spec=spec
    )
    while not pc.describe_index(PINECONE_INDEX_NAME).status['ready']:
       time.sleep(1)

index=pc.Index(PINECONE_INDEX_NAME)

def load_vector(uploaded_file_path):
    embeddings = GoogleGenerativeAIEmbeddings(model="gemini-embedding-2")
    # here what we are doing is just saving file paths for pypdf loader
    file_paths = []
    # we are looping on each files and saving all of them manually in the spload directory
    for file in uploaded_file_path:
        savepath = Path(UPLOAD_DIR) / file.filename
        with open(savepath,'wb') as f:
            f.write(file.file.read())
        file_paths.append(str(savepath))

    #  now we are saving all file chunnks in all_chunks
   
    for file in file_paths:
        # we just got the function here which is going to give us chunks
        chunks = get_chunks(file)
        text = [chunk.page_content for chunk in chunks]
        # metadatas = [chunk.metadata for chunk in chunks]
        metadatas = []

        for chunk in chunks:
          meta = chunk.metadata.copy()
          meta["text"] = chunk.page_content
          metadatas.append(meta)

        print(text ,metadatas)
        ids =[f"{Path(file).stem}-{i}" for i in range(len(chunks))]

        print(f"Processing file: {file} with {len(chunks)} chunks...")

        vector = embeddings.embed_documents(text)

        # now what we are goning to do here is uploading vectors in vector db wth progresss bar

        with tqdm(total=len(chunks),desc=f'Uploading {file} file to pinecone') as progress:
            index.upsert(vectors=zip(ids,vector,metadatas)) 
            progress.update(len(vector)) 
            print(f"Finished uploading {file} to Pinecone.")

    print(f" all files are uploaded successfully")