const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "Recetario";

exports.mongoConnect = () => {
    const mongoStringConnection = 'mongodb+srv://dymmdaniel:xtNnQIf6NFHSKuAZ@cluster0.rxvy9iv.mongodb.net/?retryWrites=true&w=majority';
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Mongodb connection error"));
}

