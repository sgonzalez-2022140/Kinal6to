'use strict'

import { Schema, model } from 'mongoose'

const replySchema = Schema({
    replypost: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        ref: 'comment',
        required: true
    },
    user: {
        type: String,
        ref: 'user',
        required: true
    }
}, {
    versionKey: false
}
)

export default model('reply', replySchema)