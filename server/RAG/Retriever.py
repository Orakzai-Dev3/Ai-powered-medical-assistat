from pinecone import Pinecone , ServerlessSpec
from langchain_pinecone import  PineconeVectorStore
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv
import time

import os
load_dotenv()
print(os.getenv('PINECONE_API_KEY'))
PINECONE_INDEX_NAME = os.getenv('PINECONE_INDEX_NAME')

pc = Pinecone(
    api_key = os.getenv('PINECONE_API_KEY')
)
spec = ServerlessSpec(cloud='aws',region=os.getenv('PINECONE_ENV'))
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

index = pc.Index(
     os.getenv('PINECONE_INDEX_NAME')
)


vector_store = PineconeVectorStore(
    index =index,
    embedding = GoogleGenerativeAIEmbeddings(model="gemini-embedding-2")

)

retriever = vector_store.as_retriever()
print("Retriever initialized successfully")