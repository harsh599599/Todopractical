const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    },
})
module.exports = mongoose.model('TodoTask', todoTaskSchema);