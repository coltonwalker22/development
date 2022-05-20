const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    isLiving:{
        type: Boolean,
        required: true
    },
    credits:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Bounty', bountySchema)