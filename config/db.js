const mongoose = require("mongoose");
require("dotenv").config();
const databaseUrl = process.env.MONGODB;
const connectDB = () => {
  return mongoose.connect(databaseUrl);
};
module.exports = connectDB;
