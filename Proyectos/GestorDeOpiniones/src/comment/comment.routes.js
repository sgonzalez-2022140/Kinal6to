'use strict'

import { Router } from 'express' 
import {
    createPost, updatePost
} from './comment.controller.js'

import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

//Crear el post
api.post('/createPost', [validateJwt], createPost)

api.post('/updatePost/:id', [validateJwt] ,updatePost)

export default api