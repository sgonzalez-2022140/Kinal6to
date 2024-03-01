import express from 'express'
import { registUser, login, updateUser } from './user.controller.js'

import { 
    validateJwt
} from '../middlewares/validate-jwt.js';

const api = express.Router()

api.post('/registUser', registUser)
api.post('/login', login)

api.put('/updateUser/:id', [validateJwt], updateUser)


export default api