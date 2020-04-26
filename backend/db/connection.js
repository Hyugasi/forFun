const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dealership_db", {
  useNewUrlParser: true,
});

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/dealership_db";
}

mongoose.Promise = Promise;
module.exports = mongoose;
