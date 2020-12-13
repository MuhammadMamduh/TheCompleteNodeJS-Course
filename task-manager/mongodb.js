// CRUD
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const  ObjectID = mongodb.ObjectID;
const {MongoClient, ObjectID, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



const id= new ObjectID();
// console.log(id + ' | ' + id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client)=>{
    if(error)
    {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26,
    // }, (error2, result)=>{
    //     if(error2)
    //     {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // })

    db.collection('users').findOne({_id:new ObjectID('5fd4b95f048d8134891a4aae')}, (error, user)=>{
        if(error)
        {
            return console.log('Unable to fetch');
        }

        console.log(user);
    })

    console.log(db.collection('users').find({age:27}).toArray((error, users)=>{
        console.log(users);
    }));
    console.log(db.collection('users').find({age:27}).count((error, count)=>{
        console.log(count);
    }));
    
    console.log(db.collection('tasks').findOne({_id:new ObjectId('5fd4c9a1e2533317bd4a6e73')}, (error, task)=>{
        if(error)
        {
            return console.log('Unable to fetch');
        }

        console.log(task);
        console.log('_________________________');
    }));
    console.log(db.collection('tasks').find({completed:false}).toArray((error, tasks)=>{
        console.log(tasks);
        console.log('_________________________');
    }));
});