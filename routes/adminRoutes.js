const express = require('express');
const adminController = require('../controllers/adminController');

const route = express.Router();
//admin routes
route.get('/post/create', adminController.add_new_post);
route.post('/post/create', adminController.save_new_post);
route.get('/posts', adminController.all_post);
route.get('/post/update/id', adminController.update_post)
route.post('/post/update/id', adminController.save_update_post)
route.delete('/post/delete/:id', adminController.delete_posts);

module.exports = route;