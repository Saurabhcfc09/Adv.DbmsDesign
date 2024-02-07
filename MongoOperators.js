//create Collection
db.createCollection("rohit)
//op: { ok: 1 }     
//insertOne()
db.rohit.insertOne({name: "rohit"})
/*
op: 
{
                       acknowledged: true,
                       insertedId: ObjectId('65b5d064f1a20a861f6399a4')
                   }
*/

//insertMany()
db.rohit.insertMany({
                    "Emp_ID":"10025AE336",
                    "Personal_details":{
                                         "First_Name":"Radhika",
                                         "Last_Name":"Sharma",
                                         "Date_Of_Birth":"1995-09-26"
                                       },
                             "Contact":{
                                         "email":"radhika_sharma.123@gmail.com",
                                         "phone":"9848022338"
                                        },
                              "Address":{
                                         "city":"Hyderabad",
                                         "Area":"Madapur",
                                         "State":"Telangana"
                                       }
                    })

//Refference relations
 db.rohit.insertOne({Emp_ID: "10025AE336"})
 db.rohit.insertOne({Emp_ID: "10025AE336", address_Id: ObjectId('65b5d84df1a20a861f6399a5')})

/*
 op1:               {
                       acknowledged: true,
                       insertedId: ObjectId('65b5d946f1a20a861f6399a6')
                    }
         
 op2:               {
                        _id: ObjectId('65b5d84df1a20a861f6399a5'),
                        Emp_ID: '10025AE336'
                     }
                     {
                        _id: ObjectId('65b5d946f1a20a861f6399a6'),
                        Emp_ID: '10025AE336',
                        address_Id: ObjectId('65b5d84df1a20a861f6399a5')
                     }
*/


//Embeded relations
db.users.insert({
    {
        "_id":"ObjectId(""52ffc33cd85242f436000001"")",
        "contact":"987654321",
        "dob":"01-01-1991",
        "name":"Tom Benzamin",
        "address":[
            {
                "building":"22 A, Indiana Apt",
                "pincode":123456,
                "city":"Los Angeles",
                "state":"California"
            },
            {
                "building":"170 A, Acropolis Apt",
                "pincode":456789,
                "city":"Chicago",
                "state":"Illinois"
            }
        ]
    }
})

/*
op1: 
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65b5db64f1a20a861f6399a7')
  }
}
op2:
{
  _id: ObjectId('65b5db64f1a20a861f6399a7'),
  contact: '987654321',
  dob: '01-01-1991',
  name: 'Tom Benzamin',
  address: [
    {
      building: '22 A, Indiana Apt',
      pincode: 123456,
      city: 'Los Angeles',
      state: 'California'
    },
    {
      building: '170 A, Acropolis Apt',
      pincode: 456789,
      city: 'Chicago',
      state: 'Illinois'
    }
  ]
}
*/
