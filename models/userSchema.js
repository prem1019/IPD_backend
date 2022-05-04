const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Entertainment: {
        type: Number,
        required: true
    },
    Social_media: {
        type: Number,
        required: true
    },
    Gaming: {
        type: Number,
        required: true
    },
    Education: {
        type: Number,
        required: true
    },
    Health_Fitness: {
        type: Number,
        required: true
    },
    Books_Music: {
        type: Number,
        required: true
    },
    Business_Finance: {
        type: Number,
        required: true
    },
    Other: {
        type: Number,
        required: true
    },
    Total: {
        type: Number,
    }
})   

const User = mongoose.model('Time',userSchema)

module.exports = User