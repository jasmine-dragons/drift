const mongoose = require('mongoose')

const userTemplate = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    friends: {
        type: Array,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    driftStarted: {
        type: Boolean,
        required: true
    },
    currentStage: {
        type: Number,
        required: true
    },
    currentDrift: {
        type: Array,
        required: true
    }
})

const User = mongoose.model('users', userTemplate);
module.exports = User;