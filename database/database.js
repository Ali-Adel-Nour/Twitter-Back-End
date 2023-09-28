const mongoose = require('mongoose')
const databaseURL = require('../.env')


const config = require('../config')

const connectToDatabase = async () => {
  try {
    console.log('Connecting to the database...');
    await mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};
module.exports = { connectToDatabase, mongoose };