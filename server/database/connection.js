const { uri } = require('./token');
const MongoClient = require('mongodb').MongoClient;
module.exports = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
