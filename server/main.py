from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from middleware.exception_handler import exception_handler
from routes.ask_question_route import Question_router
from routes.Upload_pdf_route import Upload_pdf_router

app = FastAPI(name='Medical Assistant',description='A medical assistant application that provides information and support to users based on their medical queries.',)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials = ['*'],
    allow_methods=["*"],
    allow_headers=["*"],

)

app.middleware("http")(exception_handler)

app.include_router(Question_router)
app.include_router(Upload_pdf_router)

