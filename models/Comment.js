const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    commentText: {
        type: String,
        required: true,
    },
    upvote: {
        type: Number,
        default: 1,
    },
    downvote: {
        type: Number,
        default: 0
    },   

});

module.exports = mongoose.model("Comment", CommentSchema);