const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const EstudiosSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  price: Number,
});

module.exports = mongoose.model("Estudios", EstudiosSchema);