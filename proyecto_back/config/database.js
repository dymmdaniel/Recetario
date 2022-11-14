const mongoose = require("mongoose");

const URI = 'TU_URI';

exports.mongoConnect = () => {
    const mongoStringConnection = URI;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection error"));
}

