const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const mongodbUrl = process.env.MONGOURL;

const connectDB = () => {

    mongoose.connect(mongodbUrl)
        .then(() => console.log('Database connected'))
        .catch((e) => console.log("Databse Connection Error " + e))
}

module.exports = { connectDB };