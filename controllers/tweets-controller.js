const Tweets = require('../database/model/Tweet')

const config = require('../config')




// Controller function to create a new tweet
async function createTweet(req, res) {
  try {
    const { content, image, userId } = req.body;
    console.log(req.body); // Log the request body for debugging purposes
    const newTweet = new Tweets({
      content,
      image,
      userId,
    });
    await newTweet.save();
    res.status(201).json(newTweet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


// Controller function to get all tweets
async function getAllTweets(req, res) {
  try {
    const tweets = await Tweet.find().populate('user', ['username', 'email']); // Populate user details
    res.status(200).json(tweets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller function to get a specific tweet by ID
async function getTweetById(req, res) {
  const tweetId = req.params.id;
  try {
    const tweet = await Tweet.findById(tweetId).populate('user', ['username', 'email']); // Populate user details
    if (!tweet) {
      return res.status(404).json({ error: 'Tweet not found' });
    }
    res.status(200).json(tweet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller function to update a tweet by ID
async function updateTweetById(req, res) {
  const tweetId = req.params.id;
  try {
    const updatedTweet = await Tweet.findByIdAndUpdate(
      tweetId,
      { $set: req.body },
      { new: true }
    ).populate('user', ['username', 'email']); // Populate user details
    if (!updatedTweet) {
      return res.status(404).json({ error: 'Tweet not found' });
    }
    res.status(200).json(updatedTweet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Controller function to delete a tweet by ID
async function deleteTweetById(req, res) {
  const tweetId = req.params.id;
  try {
    const deletedTweet = await Tweet.findByIdAndDelete(tweetId);
    if (!deletedTweet) {
      return res.status(404).json({ error: 'Tweet not found' });
    }
    res.status(200).json(deletedTweet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createTweet,
  getAllTweets,
  getTweetById,
  updateTweetById,
  deleteTweetById,
};
