// Import modules
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;

// serve static files
app.use(express.static('public'));

// use templating engines
app.set('view engine', 'ejs')

// set up the homepage route and serve index.html
app.get('/', (req, res) => {
    res.render('index');

})

// set up the about page route and serve about.html
app.get('/about', (req, res) => {
    res.render('about');
})

// set up the overview page route and serve overview.html
app.get('/contact', (req, res) => {
    res.render('contact');

})

// set up the login page route and serve signup.html
app.get('/login', (req, res) => {
    res.render('login');

})

// set up the sign up page route and serve signup.html
app.get('/signup', (req, res) => {
    res.render('signup');

})

// Server
app.listen(port, () => {
    console.log(`App's running on PORT: ${port}`)
}
)