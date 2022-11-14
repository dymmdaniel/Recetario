const mongoose = require("mongoose");

const URI = 'mongodb+srv://dymmdaniel:6zoMFbyJb9CUYw0J@cluster0.rxvy9iv.mongodb.net/?retryWrites=true&w=majority';

exports.mongoConnect = () => {
    const mongoStringConnection = URI;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection error"));
}

