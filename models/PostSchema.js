const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, {
    collection: 'posts',
    timestamps: true,
})

//model
const Post = mongoose.model('Post', PostSchema)

//export model
module.exports = Post;