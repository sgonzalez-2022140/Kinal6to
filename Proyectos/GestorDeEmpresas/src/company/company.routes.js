import express from 'express'
import { saveCompany } from './company.controller.js'

const api = express.Router()

api.post('/saveCompany', saveCompany)

export default api