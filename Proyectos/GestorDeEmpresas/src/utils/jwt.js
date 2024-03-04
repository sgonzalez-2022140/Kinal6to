'use strict'
import jwt from 'jsonwebtoken'
const secretKey = '@LlaveSecreta2022140@'

export const generateJwt = async(payload) =>{
    try {
        return jwt.sign(payload, secretKey,{
            expiresIn: '4h',
            algorithm: 'HS256'
        })
    } catch (error) {
        console.error(error);
        return err
    }
}