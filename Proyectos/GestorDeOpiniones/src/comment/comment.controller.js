'use strict'

import User from '../user/user.model.js'
import Comment from '../comment/comment.model.js'

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