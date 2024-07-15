const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob: { String },
  age: { Number },
  gender: { String },
  breed: { String },
  bio: { String },
  onWalk: { String }
});

const dogModel = mongoose.model("Dog", dogSchema);
module.exports = dogModel;