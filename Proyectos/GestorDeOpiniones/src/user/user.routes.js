import express from 'express'
import { registUser, login, updateUser, deleteU, editPassword  } from './user.controller.js'

import { 
    validateJwt
} from '../middlewares/validate-jwt.js';

const api = express.Router()

api.post('/registUser', registUser)
api.post('/login', login)

api.put('/updateUser/:id', [validateJwt], updateUser)
api.put('/editPassword/:id', [validateJwt], editPassword)

api.delete('/deleteU/:id', [validateJwt], deleteU)



export default api