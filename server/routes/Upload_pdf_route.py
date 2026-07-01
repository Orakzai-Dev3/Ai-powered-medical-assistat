from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
from RAG.Vector_store import load_vector
from logger import logger
import os

Upload_pdf_router = APIRouter()
@Upload_pdf_router.post('/upload-pdf/')
async def upload_pdf(files: list[UploadFile] = File(...)):
    try:
        logger.info(f"Received {len(files)} files for upload.")
        load_vector(files)
        logger.info("Files uploaded and processed successfully.")

    except Exception as exc:
        logger.exception('Error occurred while uploading the file')
        return JSONResponse(status_code=500,content={'message':'An error occurred while uploading the file. Please try again later.' + str(exc)})