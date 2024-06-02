require('dotenv').config();
const mongoose = require('mongoose');
console.log('------ Print --------', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

// import models
const User = require('./user');


const db = mongoose.connection;

db.once('open', () => console.log(`Connected to MongoDB at ${db.host}:${db.port}`));
db.on('error', (error) => console.log('Database error \n', error));

module.exports = {
    // models go
    User,
}