from fastapi import FastAPI, Request
import uvicorn
from database import MongoDB
from Firebase import Firebase

mongo = MongoDB()
firebase = Firebase()
app = FastAPI()


@app.get("/gets")
async def get_collection():
    data = mongo.find_all("family")
    return data


@app.post("/backup")
async def get_collection():
    res = mongo.backup()
    upload = firebase.upload_folder()
    if res and upload:
        return {
            "status": 200,
            "message": "Success"
        }

    return {
        "status": 200,
        "message": "bad"
    }


@app.post("/restore")
async def get_collection(request: Request):
    body = await request.json()
    downloaded = firebase.download_folder(body["path"])
    res = mongo.restore()
    if res and downloaded:
        return {
            "status": 200,
            "message": "Restore completed successfully!"
        }
        
    return {
        "status": 200,
        "message": "Error during Restore",

    }


@app.get("/{path:path}")
async def catch_all(path: str):
    return {
        "databases": "MONGODB_DATABSE",
        "message": f"Endpoint {path} not found"
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8001, host="0.0.0.0", reload=True)
