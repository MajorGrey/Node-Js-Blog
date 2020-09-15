const express = require('express');
const Post = require('../models/post');
const route = express.Router();

route.get('/', (req, res) => {
    Post.find()
        .then((data) => {
            res.render('index', { title: 'Major Grey', posts: data })
        })
        .catch((err) => {
            console.log(err)
        });
});

module.exports = route;