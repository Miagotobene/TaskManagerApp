// Import modules
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');
const port = 3000;

// import data 
const { todoApp } = require('./models');

// test model 
// todoApp.find({}).then(todo => console.log('TodoApp\n', todo)).catch(error => console.log('Error\n', error));


// serve static files
app.use(express.static('public'));
app.use(express.json()); // install middleware

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

// set up the todo list page route and serve todo.ejs
app.use('/api/v1/tasks', tasks);


// app.get('/api/v1/tasks')  -- get all the tasks
// app.get('/api/v1/tasks')  -- create a new task
// app.get('/api/v1/tasks/:id')  -- update task
// app.get('/api/v1/tasks/:id')  -- delete task



// set up the timer page route and serve timer.ejs
app.get('/timer', (req, res) => {
    res.render('timer');

})

// Server
app.listen(port, () => {
    console.log(`App's running on PORT: ${port}`)
}
)