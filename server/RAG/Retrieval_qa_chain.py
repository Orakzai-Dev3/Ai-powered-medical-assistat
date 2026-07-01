from langchain_classic.chains import RetrievalQA
from RAG.Prompt_temp import medical_prompt
from RAG.llm import llm

def get_chain (retriever):
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type = 'stuff',
        retriever=retriever,
        return_source_documents=True,
        chain_type_kwargs={
            'prompt': medical_prompt
        }
    )
    return qa_chain

print(RetrievalQA)