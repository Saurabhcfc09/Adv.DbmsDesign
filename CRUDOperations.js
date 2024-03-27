from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://saurabhcfc09:Torres09@cluster0.cvhg3db.mongodb.net/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    '''for db_name in client.list_database_names():
        print(db_name)*/''' #once sucessfully established connection
except Exception as e:
    print(e)

  

db = client['task_management']
tasks_collection = db['tasks']



//INSERT ONE
    

task_data = {
    'title': 'Complete Project Proposal',
    'description': 'Write a detailed proposal for the upcoming project.',
    'priority': 'High',
    'due_date': '2024-02-28'
}
result=tasks_collection.insert_one(task_data)
print(result)

#INSERT MANY

tasks_data = [
    {
        'title': 'Research Market Trends',
        'description': 'Gather information on current market trends.',
        'priority': 'Medium',
        'due_date': '2024-02-25'
    },
    {
        'title': 'Prepare Presentation Slides',
        'description': 'Create slides for the project presentation.',
        'priority': 'High',
        'due_date': '2024-03-05'
    }
]
result=tasks_collection.insert_many(tasks_data)
print(result)

//FIND ONE


task = tasks_collection.find_one({'title': 'Complete Project Proposal'})
print(task)

//FIND ALL

all_tasks = tasks_collection.find()
for task in all_tasks:
    print(task)

//UPDATE ONE

tasks_collection.update_one({'title': 'Complete Project Proposal'}, {'$set': {'priority': 'Highest'}})

//UPDATE ALL

tasks_collection.update_many({}, {'$set': {'priority': 'Low'}})

//DELETE ONE

deli=tasks_collection.delete_one({'title': 'Research Market Trends'})
print(deli)

//DELETE ALL

deli_1=tasks_collection.delete_many({})
print(deli_1)
  

