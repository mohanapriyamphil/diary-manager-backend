const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    collection: 'users',
    timestamps: true,
})

//model
const User = mongoose.model('User', UserSchema)

//export model
module.exports = User;