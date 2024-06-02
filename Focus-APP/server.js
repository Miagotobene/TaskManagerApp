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


// import model
const { User } = require('./models')


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
app.use(passport.initialize());
app.use(passport.session())

// middleware for tracking users and alertts
app.use((req,res,next) =>{
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next(); // goes to the route
})

// ****************** GET Routes ************************* //

// set up the homepage route and serve index.ejs
app.get('/', (req,res) => {
    res.render('index')
})
// test the testDatabase model 
// require('./models/testDatabase');

// set up the homepage route after user has logged in
app.get('/homepage', (req,res) => {
    res.render('index-loggedin')
})

// set up the about page route and serve about.ejs
app.get('/about', (req, res) => {
    res.render('about');
})



// set up the sign up page route and serve signup.ejs
app.get('/auth/signup', (req, res) => {
    res.render('auth/signup', {});

})

// set up the login page route and serve login.ejs
app.get('/auth/login', (req, res) => {
    res.render('auth/login', {});

})

// set up the login page route and serve login.ejs
app.get('/profile', (req, res) => {
    res.render('profile', {});

})

// set up the todo list page route and serve todo.ejs

app.get('/todo', (req, res) => {
    res.render('todo');

})


// set up the timer page route and serve timer.ejs
app.get('/timer', (req, res) => {
    res.render('timer');

})

// log the user out of the app
app.get('/auth/logout', (req,res) => {
    res.locals.currentUser = null;
    req.logOut((error, next) => {
        if (error){
            req.flash('error', 'Error logging out. Please try again.');
            return next(error);
        }
        req.flash('success', 'Logging out...See you next time!');
        res.redirect('/');
    });

});

// ****************** POST Routes ************************* //

// get data from req.body and create user + error handling
app.post('/auth/signup', async (req, res) => {
    // res.send(req.body)
    // search for the user's email in the database
    try {
        const findUser = await User.findOne( { email: req.body.email })

        // create a user if there isn't one 
        if (!findUser ){
            const newUser = await User.create({
                name: req.body.name,
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            });
            // req.flash('sucess', `Welcome ${newUser.name}! Account's created.`)
            // authenticate the user via passport
            passport.authenticate('local', {
                successRedirect: '/homepage',
                successFlash: `Welcome ${newUser.name}! Account's created.`
            })(req, res);
        } else {
            req.flash('error', 'Email already exist. Try logging in!');
            res.redirect('/auth/login');
        }
    } catch (error) {
        console.log('---------- ERROR IN SIGNUP POST -------------', error);
        res.send(error)
        
    }

})

// authenticate the user 
app.post('/auth/login', passport.authenticate('local', {
    successRedirect: '/homepage',
    failureRedirect: '/auth/login',
    successFlash: 'Welcome back to your account!',
    failureFlash: 'Either email or password is incorrect. Please try again.'
}), (req, res) => {
    // res.send(req.body)


})

// Server
app.listen(port, () => {
    console.log(`App's running on PORT: ${port}`)
}
)