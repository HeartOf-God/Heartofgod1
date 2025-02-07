const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://heartofgod_admin:<password>@cluster0.xxxxxx.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function createDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        const db = client.db("heartofgod");
        const collection = db.collection("users");

        const sampleUser = { name: "John Doe", email: "john@example.com" };
        await collection.insertOne(sampleUser);

        console.log("Database and collection created successfully!");
    } finally {
        await client.close();
    }
}

createDatabase().catch(console.error);
