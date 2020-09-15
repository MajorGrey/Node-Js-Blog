const Post = require('../models/post');

const all_post = (req, res) => {
    Post.find()
        .then((data) => {
            res.render('admin/posts', { title: 'Create New Post', data: data });
        })
        .catch((err) => {
            console.log(err)
        });
}

const add_new_post = (req, res) => {
    res.render('admin/create', { title: 'Create New Post' });
}

const save_new_post = (req, res) => {
    const post = new Post(req.body);
    post.save()
        .then((data) => {
            res.render('admin/create', { title: 'Create New Post', success: 'Post Created Successfully' });
        })
        .catch((err) => {
            console.log(err);
        });
}

const update_post = (req, res) => {

}

const save_update_post = (req, res) => {

}

const delete_posts = (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
        .then((data) => {
            res.send('success')
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('404', { title: '404' });
        })
}

module.exports = {
    all_post,
    save_new_post,
    delete_posts,
    add_new_post,
    update_post,
    save_update_post
}