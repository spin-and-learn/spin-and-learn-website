import subprocess
from fastapi import FastAPI
from database import MongoDB
import uvicorn
import os
import json


mongo = MongoDB()
app = FastAPI()


@app.get("/gets")
async def get_collection():
    data = mongo.find_all("family")
    return {
        "quantity": len(data),
        "data": data
    }


@app.get("/backup")
async def create_mongo_backup():
    try:
        subprocess.run(
            ["mongodump", "--host", "mongo", "--out", "/app/backup"])
        return {"message": "MongoDB backup created successfully"}
    except subprocess.CalledProcessError as e:
        return {"error": f"Backup creation failed: {e}"}


@app.post("/create")
async def post_collection():
    data = {
        "name": "brayhan",
        "message": "klk",
        "age": 28
    }

    for _ in range(10000):
        mongo.insert_one("family", dict(data))

    return {
        "name": "brayhan",
        "message": "klk",
        "age": 28
    }


@app.get("/{path:path}")
async def catch_all(path: str):
    print(mongo.all_databases())
    return {
        "databases": "MONGODB_DATABSE",
        "message": f"Endpoint {path} not found"
    }


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, host="0.0.0.0", reload=True)
