'use strict'

import User from '../user/user.model.js'
import Comment from '../comment/comment.model.js'
import { checkUpdateReply } from '../utils/validator.js'

export const createPost = async(req, res)=>{
    try {
        //capturar la info del mensaje y del usuario
        let data = req.body;
        data.user = req.user._id
        //verificar que si existe el usuario
        let user = await User.findOne({_id: data.user})
        if(!user) return res.status(404).send({message: 'User does not exists'})

        //postear el mensaje (no importa si hace 300 post)
        let comment = new Comment(data)
        await comment.save()
        //mensaje de que posteo
        return res.send({message: `${comment.title},\n ${comment.maintext}`})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message: 'Error creating your post :V', err})
    }
}

export const updatePost = async (req, res)=>{
    try {
        let data = req.body
        //el id
        let { id } = req.params
        //validar que traiga datos
        let updatePost = checkUpdateReply(data, id)
        //responder
        if(!updatePost) return res.status(400).send({ message: 'Have submitted some data that cannot be updated' })
        //actualizar
        let updatedPost = await Comment.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        ).populate('user',['maintext']) //no ver el mensaje que puso originalmente
        //Validar la actualización
        if(!updatedPost) return res.status(404).send({message: 'Post not found'})
        return res.send({message: 'new reply: ', updatedPost})
    }catch (err) {
        console.error(err)
    }
}

export const deleteComment = async (req, res)=>{
    try {
        //jalar el id
        let { id } = req.params
        //Eliminar
        let deleteComment = await Comment.deleteOne({_id: id})
        //Validar que se eliminó
        if(deleteComment.deletedCount === 0) return res.status(404).send({message: '´Post not found and not deleted'})
        //Responder
        return res.send({message: 'Comment = Death'})
    }catch(err) {
        console.error(err)
    }
}