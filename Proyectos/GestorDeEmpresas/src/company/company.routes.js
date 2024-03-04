import express from 'express'
import { saveCompany, getCompany, getZA, getAZ, updateCompany, getExcel, getYearCareer } from './company.controller.js'
import { validateJwt, isAdmin } from '../middlewares/validate-Jwt.js'

const api = express.Router()

api.post('/saveCompany', saveCompany)

api.get('/getCompany',[validateJwt, isAdmin], getCompany)
api.get('/getZA',[validateJwt, isAdmin], getZA)
api.get('/getAZ',[validateJwt, isAdmin], getAZ)
api.get('/getExcel', [], getExcel)
api.get('/getYearCareer', [validateJwt, isAdmin], getYearCareer)

api.put('/updateCompany/:id', [validateJwt, isAdmin ], updateCompany)

export default api