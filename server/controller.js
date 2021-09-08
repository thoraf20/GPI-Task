const {MongoClient} = require('mongodb');
require('dotenv').config()

    const client = new MongoClient(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tls: true
    });

    client.connect();

class Controller {
    
    async getInventory () {
        const database = client.db('myFirstDatabase');

        const collect = database.collection('inventory').find();
        return (await collect.toArray())
    };

};

module.exports = Controller;