'use strict'

import Company from "./company.model.js"
import { checkUpdate } from '../utils/validator.js'
import ExcelJS from 'exceljs'



export const saveCompany = async(req, res)=>{
    try{
        let data = req.body
        //guardat en variable
        let company = new Company(data)
        await company.save()
        //mensaje para decir que se guardo
        return res.send({message: `We add this company: ${company.name}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to add company'})
    }
}

export const getCompany = async(req, res) =>{
    try {
        let company = await Company.find()
        return res.send({company})       
        
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error getting company'})
    }
}

export const getZA = async(req, res) =>{
    try {
        let company = await Company.find().sort({name: -1})        
        return res.send({company})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error getting company'})
    }
}

export const getAZ = async(req, res) =>{
    try {
        let company = await Company.find().sort({name: 1})
        return res.send({company})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error getting company'})
    }
}

export const updateCompany = async(req, res) =>{
    try {
        //Jalar el id
        let { id } = req.params
        //traer la info del server
        let data = req.body
        //validar la info
        let update = checkUpdate(data, false)
        if(!update) return res.status(400).send({message: 'You can´t edit this data'})
        let updatedCompany = await Company.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedCompany) return res.status(404).send({message: 'Company not found and not update'})
        return res.send({message: 'Company updated successfully', updatedCompany})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error updating company'})
    }
}

export const getExcel = async(req, res) =>{
    try {
        // Obtener las empresas de la base de datos
        let companies = await Company.find()
        // Crear un nuevo libro de Excel
        let workbook = new ExcelJS.Workbook();
        let worksheet = workbook.addWorksheet('Companys');
        // Definir las columnas en el archivo de Excel
        worksheet.columns = [
            { header: 'Nombre', key: 'name', width: 20 },
            { header: 'Categoría', key: 'category', width: 20 },
            { header: 'Años de experiencia', key: 'years', width: 20 },
            { header: 'Nivel de trayectoria', key: 'impactOfCompany', width: 20}
                        
            
        ];

        // Agregar las empresas al archivo de Excel
        companies.forEach(company => {
            worksheet.addRow({
            name: company.name,
            category: company.category,
            years: company.years,
            impactOfCompany: company.impactOfCompany
            });
        });

        // Enviar el archivo Excel al cliente
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=ListadoDeEmpresas.xlsx');
        await workbook.xlsx.write(res);

    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error getting company '})
    }
}

export const getYearCareer = async(req, res) =>{
    try {
        let company = await Company.find().sort({ yearsCareer: 1 })//Si queremos hacerlo al reves solo se pone -1
        return res.send({company})
    } catch (error) {
        console.error(error)
        return res.status(500).send({message: 'Error getting company'})
    }
}