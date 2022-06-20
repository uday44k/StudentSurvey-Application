const express = require('express');

const feedController = require('../controllers/feed');

// Getting the router from the express framework
const router = express.Router();

// Post /feed/getpost
router.post('/getpost/', feedController.getPosts);

// POST /feed/submitpost
router.post('/submitpost', feedController.createPost);

// Get /feed/getAllpost
router.get('/getAllpost',feedController.getAllpost);

module.exports = router;