'use strict'

import mongoose, { Schema, model } from 'mongoose'

const commentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['OPINION', 'SOBREMI'],
        required: true
    },
    maintext: {
        type: String,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true
    }

}, {
    versionKey: false 
})

export default model('comment', commentSchema)