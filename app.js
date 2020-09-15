const express = require('express');
const ejs = require('ejs');
const morgan = require('morgan')
const route = require('./routes/route');
const postRoute = require('./routes/postRoutes');
const adminRoute = require('./routes/adminRoutes');
const mongoose = require('mongoose');

// express app
const app = express();

//connection strng to db
const dbURL = 'mongodb+srv://major_grey:uniquejimmy@cluster0.jhis7.mongodb.net/node-blog?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
    //listen for request
    app.listen(404);
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
});

//register the view engine
ejs.delimiter = '?';
app.set('view engine', 'ejs');

//middlewares and static files
app.use(route)
app.use(postRoute);
app.use(adminRoute);
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

//route controller
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});