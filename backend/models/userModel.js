const mongoose = require('mongoose')

const userTemplate = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: {
        type: Array,
        default: []
    },
    points: {
        type: Number,
        default: 0
    },
    driftStarted: {
        type: Boolean,
        default: false
    },
    currentDrift: {
        type: Array,
        default: []
    }
})

const User = mongoose.model('users', userTemplate);
module.exports = User;