const mongoose = require('mongoose');


  
const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        unique: [
            true,
            "the question must be unique"
        ],
        required: [
            true,
            "question is required"
        ],
        minlength: [10, 'Question must be at least 10 character'],
    },
    option1: {
        type: String,
        required: [
            true,
            "option 1 is required"
        ],

    },
    vote1: {
        type: Number,
        default: 0,
    },
    option2: {
        type: String,
        required: [
            true,
            "option 2 is required"
        ],
    },
    vote2: {
        type: Number,
        default: 0,
    },
    option3: {
        type: String,
    },
    vote3: {
        type: Number,
        default: 0,
    },
    option4: {
        type: String,
    },
    vote4: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})



module.exports.Poll = mongoose.model('Poll', PollSchema);
