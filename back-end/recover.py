from pymongo import MongoClient
import bson
import gzip
import shutil
import os

# MongoDB connection settings
mongo_uri = "mongodb://admin:adminPassword@localhost:27017/"
db_name = "admin"

# Connect to MongoDB
client = MongoClient(mongo_uri)
db = client[db_name]

# Directory where the backup files are located
backup_directory = "backup/"

# Restore each collection
for backup_file_name in os.listdir(backup_directory):
    if backup_file_name.endswith(".bson.gz"):
        collection_name = backup_file_name[:-len(".bson.gz")]
        collection = db[collection_name]
        backup_file_path = os.path.join(backup_directory, backup_file_name)

        with gzip.open(backup_file_path, "rb") as backup_file:
            for document_bytes in bson.decode_file_iter(backup_file):
                collection.insert_one(document_bytes)

# Close the MongoDB connection
client.close()

print("Recovery completed.")
