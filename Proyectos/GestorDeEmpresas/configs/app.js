'use strict'

//importamos express y sus confs
import express from 'express'
import { config } from "dotenv"
import cors from 'cors'


//Exportamos las rutas de las entidades
import CompanyRoutes from "../src/company/company.routes.js"
import UserRoutes from "../src/user/user.routes.js"



//express confs
const app = express()
config();
const port = process.env.PORT || 3056

//cors confs
app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())


//declarar su uso de rutas
app.use(CompanyRoutes)
app.use(UserRoutes)


export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}