from datetime import datetime
import os
import pyrebase
import firebase_admin
from firebase_admin import credentials, storage


class Firebase():

    def __init__(self):

        config = {
            "apiKey": "AIzaSyDwa-DIKr1Y7Kij3DMJ8WbjHjU5dVVCYlw",
            "authDomain": "spin-and-learn-10f2d.firebaseapp.com",
            "projectId": "spin-and-learn-10f2d",
            "storageBucket": "spin-and-learn-10f2d.appspot.com",
            "messagingSenderId": "897887607470",
            "appId": "1:897887607470:web:e5c28b2d5f1f713e6a2b3f",
            "measurementId": "G-4ZNQHBXD1M",
            "databaseURL": "gs://spin-and-learn-10f2d.appspot.com"
        }
        self.db = pyrebase.initialize_app(config)
        self.storage = self.db.storage()
        self.firebase_storage_path = "backup/"

    def upload_file(self, file_path):
        self.db.storage().child(self.firebase_storage_path).put(file_path)

    def upload_folder(self):
        now = datetime.now()
        current_date = now.strftime("%B %d, %I:%M %p")
        
        print(current_date)

        prefixed_firebase_storage_path = os.path.join(
            self.firebase_storage_path,
            current_date
        ).replace("\\", "/")

        user_home_dir = os.path.expanduser("~")
        local_folder_path = os.path.join(
            user_home_dir,
            f"{os.getcwd()}/dump"
        )

        try:
            for root, _, files in os.walk(local_folder_path):
                for file in files:
                    local_file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(
                        local_file_path, local_folder_path)
                    firebase_file_path = os.path.join(
                        prefixed_firebase_storage_path, relative_path).replace("\\", "/")
                    self.storage.child(firebase_file_path).put(local_file_path)

            print(f"Uploaded succefully!")
            self.remove_directory("dump")
            return True
        except print(0):
            return False

    def remove_directory(self, path):
        try:
            # List all items in the directory
            items = os.listdir(path)

            for item in items:
                item_path = os.path.join(path, item)

                if os.path.isdir(item_path):
                    # Recursively remove subdirectories
                    self.remove_directory(item_path)
                else:
                    # Remove files
                    os.remove(item_path)

            # Remove the empty directory itself
            os.rmdir(path)

        except Exception as e:
            return False
        return True

    def download_folder(self, firebase_storage_path):
        cred = credentials.Certificate("auth/credentials.json")
        firebase_admin.initialize_app(
            cred,
            {
                'storageBucket':  "spin-and-learn-10f2d.appspot.com"
            }
        )
        bucket = storage.bucket()
        blobs = bucket.list_blobs(prefix=firebase_storage_path)

        user_home_dir = os.path.expanduser("~")
        local_folder_path = os.path.join(
            user_home_dir,
            f"{os.getcwd()}/dump/"
        )

        for blob in blobs:
            try:
                relative_path = os.path.relpath(
                    blob.name,
                    firebase_storage_path
                )

                local_file_path = os.path.join(
                    local_folder_path,
                    relative_path
                ).replace("/", os.path.sep)

                local_file_dir = os.path.dirname(local_file_path)

                os.makedirs(local_file_dir, exist_ok=True)

                blob.download_to_filename(local_file_path)

            except Exception as e:
                print(f"Error: ", e)
                return False

        return True


# firebase = Firebase()

# firebase.upload_folder(local_folder_path)

# Firebase Storage folder path

# firebase.remove_directory("dump")
