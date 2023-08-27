from pymongo import MongoClient
from dotenv import load_dotenv
import os
import json

load_dotenv()

MONGODB_USERNAME = os.getenv('MONGO_INITDB_ROOT_USERNAME')
MONGODB_PASSWORD = os.getenv('MONGO_INITDB_ROOT_PASSWORD')
MONGODB_DATABSE = os.getenv('MONGO_INITDB_ROOT_DATABASE')
MONGODB_PORT = os.getenv('ME_CONFIG_MONGODB_PORT')
MONGODB_HOST = os.getenv('ME_CONFIG_MONGODB_HOST')
MONGODB_URL = f"mongodb://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@{MONGODB_HOST}:{MONGODB_PORT}"


class MongoDB():
    def __init__(self):
        self.client = MongoClient(MONGODB_URL)
        self.db = self.client[MONGODB_DATABSE]

        if self.client.server_info():
            print("\nConnected to MongoDB successfully.\n")
        else:
            print("/\nFailed to connect to MongoDB. \n")

    def all_databases(self):
        return self.client.list_database_names()

    def find_all(self, collection_name):
        try:
            collection = self.db[collection_name]
            documents = collection.find()

            json_documents = [
                json.loads(
                    json.dumps(doc, default=str)
                )
                for doc in documents
            ]

            return json_documents

        except Exception as e:
            return {
                "status": 400,
                "message": "Error: " + e.__str__()
            }

    def insert_one(self, collection_name, data={}):
        if data:
            try:
                collection = self.db[collection_name]
                res = collection.insert_one(dict(data))

                data.update({'_id': str(res.inserted_id)})
                sorted_dict = dict(sorted(data.items()))

                return sorted_dict

            except Exception as e:
                return {
                    "status": 400,
                    "message": "Error: " + e.__str__()
                }

        else:
            return {
                "status": 400,
                "message": "'data' cannot be None"
            }
