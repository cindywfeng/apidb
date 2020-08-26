const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbname = 'food'

let db;

const init = () => {
    return MongoClient.connect(connectionUrl).then((client) => {
        db = client.db(dbName)
        console.log('connected to database', dbName)
    })
}


function index() {
    const collection = db.collection('dishes')
    return collection.find({}).toArray()
}

function find(id) {
    const collection = db.collection('dishes')
    return collection.find({ _id: ObjectId(id) }.toArray()
    )
}

function create(newDish) {
    const collection = db.collection('dishes')
    return collection.insertOne(newDish)
}

function update(id) {
    const collection = db.collection('dishes')
    return collection.findOneAndUpdate({ id: ObjectId(id) }, { $inc: { likes : 1 }}, { returnOriginal: false })
}

function destroy(dish) {
    const collection = db.collection('dishes')
    return collection.deleteOne(
        { },
        { name: dish}
        
    )
}

module.exports = { init, index, find, create, update, destroy }