const {MongoClient, ReturnDocument} = require('mongodb');
const dotenv = require("dotenv");
dotenv.config();

let _db;

const initDB = (callback) => {
    if (_db) {
        console.log('DB is already initialized.');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDB = () => {
    if (!_db) {
        throw Error('DB not initialized');
    }
    return _db;
};

//get one document
//const result = await client.db("node_demo").collection("contacts").findOne({email: emailListing});

//create multiple documents in mongodb collection
//const result = await client.db("node_demo").collection("contacts").insertMany(newListings);

//create one single document in mongodb collection
//const result = await client.db("node_demo").collection("contacts").insertOne(newListing);

//acquires all databases in mongodb
//const databasesList = await client.db().admin().listDatabases();

module.exports = {initDB, getDB};