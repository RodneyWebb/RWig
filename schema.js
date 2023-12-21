const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    // commentid: {
    //     required: true,
    //     type: String
    // },
    username: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    timestamp: {
        required: true,
        type: Number
    }
});

const postsSchema = new mongoose.Schema({
    // userid: {
    //     required: true,
    //     type: Number
    // },
    username: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    caption: {
        required: false,
        type: String
    },
    likes: {
        required: false,
        type: [String]
    },
    comments: {
        required: false,
        type: [commentSchema]
    },
    timestamp: {
        required: true,
        type: Number
    } 
})

module.exports = mongoose.model('Posts', postsSchema)