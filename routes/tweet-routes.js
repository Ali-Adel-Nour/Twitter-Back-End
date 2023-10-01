const express = require ('express');

const router = express.Router();

const tweetController = require('../controllers/tweets-controller');

router.post('/', tweetController.createTweet);
router.get('/', tweetController.getAllTweets);
router.get('/:id', tweetController.getTweetById);
router.put('/:id', tweetController.updateTweetById);
router.delete('/:id', tweetController.deleteTweetById);

module.exports= router