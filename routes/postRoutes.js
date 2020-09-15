const express = require('express');
const Post = require('../models/post');
const route = express.Router();

route.get('/post', (req, res) => {
    res.render('post');
});
route.get('/add-post', (req, res) => {
    const post = new Post({
        title: 'Failure is not an option',
        author: 'Major Grey',
        desc: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations. ',
        body: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
    });
    post.save()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
        });
});
route.get('/posts', (req, res) => {
    Post.find()
        .then((data) => {
            res.render('posts', { title: 'All Posts', posts: data })
        })
        .catch((err) => {
            console.log(err)
        });
});
route.get('/post/:id', (req, res) => {
    Post.findById(req.params.id)
        .then((data) => {
            res.render('post', { title: data.title, data: data })
        })
        .catch((err) => {
            console.log(err)
        });
});

module.exports = route;