// ESTABLISH WHERE THE DB LIVES
var mongoose = require('mongoose')
var connectionstring = 'mongodb://test:startgo@ds040877.mlab.com:40877/first-mongodb-database-test'
var connection = mongoose.connection;


// Establishes MongoDb Connection
mongoose.connect(connectionstring, {
    useMongoClient: true,
    keepAlive: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', console.error.bind(console, 'connection error:'))

connection.once('open', function () {
    console.log('We are connected to the db')
});