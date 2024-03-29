@@ -0,0 +1,48 @@
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import poplib
import datetime
from pprint import pprint

uri = "mongodb+srv://saurabhcfc09:chris112@cluster0.cvhg3db.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # inserting one product
    new = [
    {
	"$project": {
	"state":1,
	"zip":1,
	"population":"$pop",
	"_id":0
  }
}
]

    # Write an expression that inserts the 'new_product' document into the 'products' collection.
    #result = accounts_collection.insert_one(new)
    result = list(accounts_collection.aggregate(new))

    #document_id = result.inserted_id
    #pprint(f"_id of inserted document: {document_id}")
    if result:
        print(result)
    else:
        print("No documents in the collection")


except Exception as e:
    print(e)
finally:
    client.close()
