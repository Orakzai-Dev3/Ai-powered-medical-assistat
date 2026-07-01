from logger import logger

def handle_query(chain,query:str):
    try:
        logger.debug(f"started running chain for user query: {query}")
        result = chain.invoke({'query':query})
        response = {
            'answer': result['result'],
            'source': [doc.metadata.get('sourses','')for doc in result['source_documents']]
        }
        logger.debug(f"finished running chain for user query: {response}")
        return response
    except Exception as e:
        logger.error(f"Error handling query: {e}")