'use strict'

import { Router } from 'express'

import {
    reply
} from './reply.controller.js'

import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

api.post('/reply', [validateJwt], reply)

export default api