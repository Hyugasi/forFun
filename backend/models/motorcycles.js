const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const motorcycleSchema = Schema({
  brand: String,
  model: String,
  img: String,
  price: Number,
  mileage: Number,
  title: String,
  lot: Number,
  inStock: Boolean,
});

const Motorcycle = mongoose.model("Motorcycle", motorcycleSchema);

module.exports = Motorcycle;
