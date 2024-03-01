'use strict'

import { hash, compare } from 'bcrypt'

//Encriptar la contraseña
export const encrypt = (password)=>{
    try {
        return hash(password, 10)
    } catch(err) {
        console.error(err)
        return err
    }
}

//Validar
export const checkPassword = async(password, hash)=>{
    try{
        return await compare(password, hash)
    }catch(err){
        console.error(err)
        return err
    }
}

export const checkUpdateUser = (data, userId)=>{
    if(userId){
        if(
            Object.entries(data).length === 0 ||            
            data.role ||
            data.role == '' ||
            data.password ||
            data.password == ''
        ) {
            return false
        }
        return true
    }
}

//Me di cuenta que tambien aplica para el post 
export const checkUpdateReply = (data, userId)=>{
    if(userId){
        if(
            Object.entries(data).length === 0 ||            
            data.user ||
            data.user == ''             
        ) {
            return false
        }
        return true
    }
}

