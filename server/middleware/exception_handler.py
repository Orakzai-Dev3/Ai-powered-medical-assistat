from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from logger import logger

async def exception_handler(request:Request,call_next):
   try:
      return await call_next(request)
   except Exception as exc:
      logger.exception('Unhandled exception occurred')
      return JSONResponse(status_code=500,content={'message':'An unexpected error occurred. Please try again later.' + str(exc)})
