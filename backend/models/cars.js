const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const carSchema = Schema({
  brand: String,
  model: String,
  img: String,
  price: Number,
  mileage: Number,
  title: String,
  lot: Number,
  inStock: Boolean,
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
