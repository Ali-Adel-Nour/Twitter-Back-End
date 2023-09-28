const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({

  createdAt : {type: Date,
    default: Date.now},
  updatedAt : {type: Date,
    default: Date.now},

  content: {type: String},
  image: {type: String},

  impression : {type: Number,
    default: 0},

    userId: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });

  const Tweet = mongoose.model('Tweet', userSchema);


module.exports = Tweet