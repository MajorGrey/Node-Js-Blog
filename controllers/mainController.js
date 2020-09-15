const Post = require('../models/post');

const posts = (req, res) => {
    Post.find()
        .then((data) => {
            res.render('posts', { title: 'All Posts', posts: data })
        })
        .catch((err) => {
            console.log(err)
        });
}

const full_post = (req, res) => {
    Post.findById(req.params.id)
        .then((data) => {
            res.render('post', { title: data.title, data: data })
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('404', { title: '404' });
        });
}

module.exports = {
    posts,
    full_post
}