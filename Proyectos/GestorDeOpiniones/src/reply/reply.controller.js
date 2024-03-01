'use strict'

import Comment from '../comment/comment.model.js'
import Reply from '../reply/reply.model.js'

export const reply = async(req, res)=>{
    try{
        //capturar la informacion de la BD
        let data = req.body;
        //Usar el id del usuario
        data.user = req.user._id
        //Verificar que exista el comentario
        let comment = await Comment.findOne({_id: data.comment})
        if(!comment) return res.status(404).send({message: 'No comments yet'})
        //Guardar la respuesta hacia ese comentario
        let reply = new Reply(data)
        await reply.save()
        return res.send(`You reply to ${reply.user} with: ${reply.replypost}`)
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error in the reply', err})
    }
}