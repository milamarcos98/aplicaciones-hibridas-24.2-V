import Users from '../models/users_model.js';
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt  from 'jsonwebtoken';

const getUsers = async (req, res) =>{
    try{
        let usuarios = await Users.find();
        res.json(usuarios)
    }catch(error ) {
        res.status(400).json(
            {
                error
            }
        )
    }
}

const getUser = async (req, res) =>{
    try{
        let usuario = await Users.find({_id: req.params.userId});
        res.json(usuario)
    }catch(error ) {
        res.status(400).json(
            {
                error
            }
        )
    }
}


const registerUser = async (req, res) =>{
    try {
    let body = req.body;

    let usuario = new Users({
        email       : body.email,
        name      : body.name,
        username      : body.username,
        password    :  bcrypt.hashSync( body.password, 10 )
    });
    let savedUser = await usuario.save();

    res.json({
        user: savedUser,
    })
} catch (error) {
    res.status(400).json({
        message: error.message,
    });
}
}



const loginUser = async (req, res) =>{
    Users.findOne({email: req.body.email})
        .then(datos => {
            if(datos){
                const passwordValido = bcrypt.compareSync(req.body.password, datos.password);
                if(!passwordValido) return res.status(400).json({error:'ok', msj:'Wrong user or password'})
                const jwToken = jwt.sign({
                    usuario: {_id: datos._id, name: datos.name, username: datos.username, email: datos.email}
                  }, process.env.SEED, { expiresIn: process.env.EXPIRATION });
                res.json({
                    usuario:{
                        _id:datos._id,
                        name:datos.name,
                        username:datos.username,
                        email:datos.email
                    },
                    jwToken
                });
            }else{
                res.status(400).json({
                    error:'ok',
                    msj:'wrong user or password'
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                error:'ok',
                msj:'server error' + err
            })
        })
}


export {
    getUsers,
    getUser,
    registerUser,
    loginUser
  };