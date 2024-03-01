'use strict'

import Comment from '../comment/comment.model.js'
import Reply from '../reply/reply.model.js'
import { checkUpdateReply } from '../utils/validator.js'

export const reply = async(req, res)=>{
    try{
        //capturar la informacion de la BD
        let data = req.body;
        //Usar el id del usuario
        data.user = req.user._id
        //Verificar que exista el comentario
        let comment = await Comment.findOne({_id: data.comment}).populate('user', ['name'])
        if(!comment) return res.status(404).send({message: 'No comments yet'})
        //Guardar la respuesta hacia ese comentario
        let reply = new Reply(data)
        await reply.save()
        return res.send(`You reply to ${comment} with: ${reply.replypost}`)
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error in the reply', err})
    }
}


export const updateReply = async (req, res)=>{
    try {
        let data = req.body
        //el id
        let { id } = req.params
        //validar que traiga datos
        let updateReply = checkUpdateReply(data, id)
        //responder
        if(!updateReply) return res.status(400).send({ message: 'Have submitted some data that cannot be updated' })
        //actualizar
        let updatedReply = await Reply.findOneAndUpdate(
            {_id: id},
            data,
            {new: true}
        ).populate('user',['maintext']) //no ver el mensaje que puso originalmente
        //Validar la actualización
        if(!updatedReply) return res.status(404).send({message: 'Reply not found'})
        return res.send({message: 'new reply: ', updatedReply})
    }catch (err) {
        console.error(err)
    }
}

export const deleteReply = async (req, res)=>{
    try {
        //jalar el id
        let { id } = req.params
        //Eliminar
        let deleteReply = await Reply.deleteOne({_id: id})
        //Validar que se eliminó
        if(deleteReply.deletedCount === 0) return res.status(404).send({message: 'Reply not found and not deleted'})
        //Responder
        return res.send({message: 'Reply = Death'})
    }catch(err) {
        console.error(err)
    }
}