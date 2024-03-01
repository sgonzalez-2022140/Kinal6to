'use strict'

import { generateJwt } from '../utils/jwt.js'
import { encrypt, checkPassword } from '../utils/validator.js'
import User from './user.model.js'

export const registUser = async(req, res)=>{
    try{
        let data = req.body
        //Encriptar la contraseña
        data.password = await encrypt(data.password)
        //Decir que solo tendra un rol
        data.role = 'USER'
        //guardat en variable
        let user = new User(data)
        await user.save()
        //mensaje para decir que se guardo
        return res.send({message: `Welcome ${user.name}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to create your account'})
    }
}

export const login = async(req, res)=>{
    try {
        let { account , password } = req.body

        // Validar que exista por medio de variable de account
        let user = await User.findOne({
            $or: [
                { username: account },
                { email: account }
            ]
        })

        // Verificar que sea la misma contraseña
        if(user && await checkPassword(password, user.password)){
            let loggedUser = {
                uid: user._id,
                username: user.username,
                email: user.email,
                name: user.name,
                role: user.role
            }
            // Generar el token
            let token = await generateJwt(loggedUser)

            // Responder al usuario
            return res.send({
                message: `Hello ${loggedUser.name}`,
                loggedUser,
                token
            })
        }         
        return res.status(404).send({message: 'Invalid credentials'})
    } catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to login'})
    }
}
//Aun no funciona
export const updateUser = async(req, res)=>{
    try{
        //capturar el id
        let { id } = req.params
        //capturar la data
        let data = req.body
        //Actualizar BD
        let updatedUser = await User.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updatedUser) return res.status(401).send({message: 'User not found'})
        //responder si salio bien
        return res.send({message: 'updated User', updatedUser})
    }catch(err){
        console.error(err)
        if(err.keyValue.username) return res.status(400).send({message: `Username ${err.keyValue.username} is alredy taken`})
        return res.status(500).send({message: 'Error updating account'})
    }
}

