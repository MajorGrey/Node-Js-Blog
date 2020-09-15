const express = require('express');
const Post = require('../models/post');
const route = express.Router();
//admin routes
route.get('/admin/post/create', (req, res) => {
    res.render('admin/create', { title: 'Create New Post' });
});
route.post('/admin/post/create', (req, res) => {
    console.log(req.body);
    const post = new Post(req.body);
    post.save()
        .then((data) => {
            res.render('admin/create', { title: 'Create New Post', success: 'Post Created Successfully' });
        })
        .catch((err) => {
            console.log(err);
        });
});
route.get('/admin/posts', (req, res) => {
    Post.find()
        .then((data) => {
            res.render('admin/posts', { title: 'Create New Post', data: data });
        })
        .catch((err) => {
            console.log(err)
        });

});
route.delete('/admin/post/delete/:id', (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
        .then((data) => {
            res.send('success')
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = route;