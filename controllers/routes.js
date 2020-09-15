const Post = require('../models/post');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });
    app.get('/post', (req, res) => {
        res.render('post');
    });
    app.get('/add-post', (req, res) => {
        const post = new Post({
            title: 'Failure is not an option',
            auther: 'Major Grey',
            shot_desc: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations. ',
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
    app.get('/posts', (req, res) => {
        Post.find()
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                console.log(err)
            });
    });
    app.get('/post/:slug', (req, res) => {
        Post.find()
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                console.log(err)
            });
    });
}