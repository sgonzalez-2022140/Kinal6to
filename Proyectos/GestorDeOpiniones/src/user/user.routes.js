import express from 'express'
import { registUser, login } from './user.controller.js'

const api = express.Router()

api.post('/registUser', registUser)
api.post('/login', login)

export default api