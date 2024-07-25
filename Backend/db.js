const mongoose = require("mongoose");

mongoose.connect(
 process.env.CONNECTION_STRING,
  {
    dbName:"pizuhei-hamelec"
  }
)

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
