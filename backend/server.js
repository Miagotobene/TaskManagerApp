// Import modules
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const port = 3000;

// connect to Mongodb
mongoose.connect('mongodb://localhost/my_database')

// serve static files
app.use(express.static('public'));

// use templating engines
app.set('view engine', 'ejs')

// set up the homepage route and serve index.ejs
app.get('/', (req, res) => {
    res.render('index');

})

// set up the about page route and serve about.ejs
app.get('/about', (req, res) => {
    res.render('about');
})

// set up the contact page route and serve overview.ejs
app.get('/contact', (req, res) => {
    res.render('contact');

})

// set up the login page route and serve login.ejs
app.get('/login', (req, res) => {
    res.render('login');

})

// set up the sign up page route and serve signup.ejs
app.get('/signup', (req, res) => {
    res.render('signup');

})

// set up the sign up page route and serve signup.html
app.get('/timer', (req, res) => {
    res.render('timer');

})

// Server
app.listen(port, () => {
    console.log(`App's running on PORT: ${port}`)
}
)