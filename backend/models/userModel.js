const mongoose = require('mongoose'); // import mongoose
const uniqueValidator = require('mongoose-unique-validator'); // import plugin unique validator

// création schema user
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator); // ajout du plugin au model mongoose

module.exports = mongoose.model('User', userSchema);
