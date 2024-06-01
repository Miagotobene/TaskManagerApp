// Import modules
const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');
require('dotenv').config();
const port = 3000;

// import data 
// const { todoApp } = require('./models/todo');
require('./models/index'); // changed from index to todo
// serve static files
app.use(express.static('public'));
app.use(express.json()); // install middleware
app.use(express.urlencoded({extended: false}))
// use templating engines
app.set('view engine', 'ejs')
app.use('/api/v1/tasks', tasks);

// test model 
// require('./models/testDatabase');






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

app.get('/todo', (req, res) => {
    res.render('todo');

})


// app.get('/api/v1/tasks')  -- get all the tasks
// app.get('/api/v1/tasks')  -- create a new task
// app.get('/api/v1/tasks/:id')  -- update task
// app.get('/api/v1/tasks/:id')  -- delete task



// set up the timer page route and serve timer.ejs
app.get('/timer', (req, res) => {
    res.render('timer');

})



// const start = async () => {
//     try {
//         await  process.env.MONGO_URI;
//         // app.listen(port, console.log(`App's listening on port: ${port}`))
//     } catch (error) {
//         console.log(error)
//     }
// }

// start()

// Server
app.listen(port, () => {
    console.log(`App's running on PORT: ${port}`)
}
)