from fastapi import APIRouter ,Form
from fastapi.responses import JSONResponse
from Handlers.Query_handler import handle_query
from RAG.Retriever import retriever
from RAG.Retrieval_qa_chain import get_chain
from logger import logger
import os


Question_router = APIRouter()

@Question_router.post('/ask-question/')
async def handle_route(query:str = Form(...)):
    try:
       logger.info(f"Received query: {query}")
       chain = get_chain(retriever=retriever)
       res =  handle_query(chain,query)
       logger.info(f"Query result: {res}")
       return JSONResponse(content={'result': res})
      
    except Exception as exc:
        logger.exception('Error occurred while handling the query')
        return JSONResponse(status_code=500,content={'message':'An error occurred while processing your request. Please try again later.' + str(exc)})