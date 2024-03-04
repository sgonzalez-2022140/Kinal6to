import express from 'express'
import { saveCompany, getCompany, getZA, getAZ, updateCompany, getExcel } from './company.controller.js'
import { validateJwt, isAdmin } from '../middlewares/validate-Jwt.js'

const api = express.Router()

api.post('/saveCompany', saveCompany)

api.get('/getCompany', getCompany)
api.get('/getZA', getZA)
api.get('/getAZ', getAZ)
api.get('/getExcel', [], getExcel)

api.put('/updateCompany/:id', [validateJwt, isAdmin ], updateCompany)

export default api