// Import modules
require('dotenv').config()
const express = require('express');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('./config/passport-config');
const isLoggedIn = require('./middleware/isLoggedIn');
const port = process.env.port || 3000;

// set up secret session
const SECRET_SESSION = process.env.SECRET_SESSION;



// import data 
// const todoFiles = require('./models/index'); //
// require('./models/index'); //



// serve static files
app.set('view engine', 'ejs') // use templating engines
app.use(express.static(__dirname + '/public'));
app.use(express.json()); // install middleware
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// initialize passport 
// app.use(passport.initialize());
// app.use(passport.session())

// middleware for tracking users and alertts
app.use((req,res,next) =>{
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next(); // goes to the route
})

// set up the homepage route and serve index.ejs
app.get('/', (req,res) => {
    res.render('index')
})
// test the testDatabase model 
// require('./models/testDatabase');


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


// set up the timer page route and serve timer.ejs
app.get('/timer', (req, res) => {
    res.render('timer');

})



// Server
app.listen(port, () => {
    console.log(`App's running on PORT: ${port}`)
}
)