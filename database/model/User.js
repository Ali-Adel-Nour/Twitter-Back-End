const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  email: { type: String, unique: true, required: true },
  name: String,
  username: { type: String, unique: true },
  image: String,
  bio: String,
  isVerified: { type: Boolean, default: false },
  tweets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' }],
  tokens: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Token' }],
});

const User = mongoose.model('User', userSchema,'users')

module.exports = User;