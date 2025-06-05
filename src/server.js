const { MongoClient } = require("mongodb");
require("dotenv").config({path: "./config.env"})

async function connectDB(){

    const client = new MongoClient(process.env.ATLAS_URI)

    try{
        await client.connect()

        const collections = await client.db("Microblogging").collections()
        collections.forEach((collection) => console.log(collection.s.namespace.collection))
    } catch(e){
        console.error(e)
    } finally {
        await client.close()
    }

}

module.exports = { connectDB }