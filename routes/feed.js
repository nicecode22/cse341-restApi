const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/posts', feedController.getData);

router.post('/post', feedController.postData);

module.exports = router;