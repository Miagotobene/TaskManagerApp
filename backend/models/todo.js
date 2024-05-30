const moongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title: String,
    content: String
});

const taskPost = mongoose.model('Post', todoSchema);
module.exports = taskPost