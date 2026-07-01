import os 
import shutil
from fastapi import UploadFile
 

UPLOAD_DIR = './uploaded_doc'

def Uploaded_file_handler(files:list[UploadFile])->list:
    os.makedirs(UPLOAD_DIR,exist_ok=True)
    file_path=[]
    for file in files:
        temp_path = os.path.join(UPLOAD_DIR,file.filename)
        with open(temp_path,'wb') as f:
            shutil.copyfileobj(file.file,f)
        file_path.append(temp_path)
    return file_path

    
