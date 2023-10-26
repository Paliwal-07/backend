const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  "id": {
    type: String,
    required:true,
  },
  "name": {
    type: String,
    required: true,
  },
  "company": {
    type: String,
    required: true,
  },
  "price": {
    type: Number,
    required: [true, "price must be provided"],
  },
  "colors": [{
    type: String,
  }],
  "image": {
    type: String,
    required: true,
  },
  "description": {
    type: String,
    required: true,
  },
  "category": {
    type: String,
    required: true,
  },
  "featured": {
    type: Boolean,
    default: true,
  },
  "shipping": {
    type: Boolean,
    default:true,
  },
});

module.exports = mongoose.model("Product",productSchema);