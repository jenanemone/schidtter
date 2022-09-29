const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    text: {
        type: String,
        required: true,
    },
    downvote:{
        type: Number,
        required: true,
        default: 0,
    },
    upvote:{
        type: Number,
        required: true,
        default: 1,
    }
});

module.exports = mongoose.model('post', PostSchema);