import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true
    },
    username: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required: true
    },
    imagen: {
        type: String,
        required: false        
    }
});

export default mongoose.model('Users', usuarioSchema);

