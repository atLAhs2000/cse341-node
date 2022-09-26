const {MongoClient, ReturnDocument} = require('mongodb');

//main function
async function main() {
    //connection string for mongodb
    const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fra9efi.mongodb.net/?retryWrites=true&w=majority`;
    
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    //try to connect, catch error and log if no connection, close connection after everything
    try {
        await client.connect();
        await findOneListingByEmail(client, "bcho@email.com");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//calls main
main().catch(console.error);

async function findRedListings(client, {favColor, birthday}) {
    client.db()
}

//get one document
async function findOneListingByEmail(client, emailListing) {
    const result = await client.db("node_demo").collection("contacts").findOne({email: emailListing});
    if (result) {
        console.log(`Found a listing in the collection with the name '${emailListing}'`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${emailListing}'`);
    }
}

//create multiple documents in mongodb collection
async function createMultipleListings(client, newListings) {
    const result = await client.db("node_demo").collection("contacts").insertMany(newListings);
    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds);
}

//create one single document in mongodb collection
async function createListing(client, newListing) {
    const result = await client.db("node_demo").collection("contacts").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//acquires all databases in mongodb
async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db=> {
        console.log(`- ${db.name}`);
    })
}

//module.exports = connectDB;