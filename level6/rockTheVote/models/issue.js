const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueScehma = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    upVotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    downVotes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})


module.exports = mongoose.model('issue', issueScehma)