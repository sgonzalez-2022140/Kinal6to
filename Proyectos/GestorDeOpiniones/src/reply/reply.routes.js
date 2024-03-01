'use strict'

import { Router } from 'express'

import {
    reply, updateReply, deleteReply
} from './reply.controller.js'

import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

api.post('/reply', [validateJwt], reply)

api.put('/updateReply/:id', [validateJwt], updateReply)

api.delete('/deleteReply/:id', [validateJwt], deleteReply)

export default api