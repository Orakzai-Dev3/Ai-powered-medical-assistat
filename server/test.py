from fastapi import FastAPI ,Request
from middleware.exception_handler import exception_handler

app=FastAPI()

@app.get('/')
def root(request:Request):
    return {'msg':'App is working',
            'req':str(request.url)}




  