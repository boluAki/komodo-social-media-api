const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Useer' },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.module('Post', postSchema)
