'use strict'

import { Router } from 'express' 
import {
    createPost, updatePost, deleteComment
} from './comment.controller.js'

import { validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

//Crear el post
api.post('/createPost', [validateJwt], createPost)

api.put('/updatePost/:id', [validateJwt], updatePost)

api.delete('/deleteComment/:id', [validateJwt], deleteComment)

export default api