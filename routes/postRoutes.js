const express = require('express');
const route = express.Router();
const mainController = require('../controllers/mainController')

route.get('/posts', mainController.posts);
route.get('/post/:id', mainController.full_post);

module.exports = route;