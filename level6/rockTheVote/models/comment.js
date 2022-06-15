const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentScehma = new Schema({
    comment: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})


module.exports = mongoose.model('comment', commentScehma)