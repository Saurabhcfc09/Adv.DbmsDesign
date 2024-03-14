@@ -0,0 +1,60 @@
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import datetime
from pprint import pprint

uri = "mongodb+srv://saurabhcfc09:counter34@cluster0.cvhg3db.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')

    # Get reference to 'sample_training' database
    db = client.sample_training

    # Get reference to 'zips' collection
    accounts_collection = db.zips

    # Define the aggregation pipeline
    pipeline = [
        {
            "$group": {
                "_id": "$state",
                "total_pop": {"$sum": "$pop"}
            }
        },
        {
            "$match": {
                "total_pop": {"$lt": 1000000}  # Corrected typo in "$lt"
            }
        },
        {
            "$out": "small_states"
        }
    ]

    # Execute the aggregation pipeline
    result = list(accounts_collection.aggregate(pipeline))

    # Print the result of the aggregation pipeline or a message if no documents match the criteria
    if result:
        pprint(result)
    else:
        print("No documents in the collection")

    # Retrieve the list of collections after the aggregation pipeline has executed
    collection_names = db.list_collection_names()

    # Print the list of collections
    print("Collections:")
    for collection_name in collection_names:
        print(collection_name)

except Exception as e:
    print(e)

finally:
    # Close the MongoDB client connection
    client.close()
