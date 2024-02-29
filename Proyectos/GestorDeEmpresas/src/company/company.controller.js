'use strict'

import Company from "./company.model.js"

export const saveCompany = async(req, res)=>{
    try{
        let data = req.body
        //guardat en variable
        let company = new Company(data)
        await company.save()
        //mensaje para decir que se guardo
        return res.send({message: `We add this company ${company.name}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to add company'})
    }
}