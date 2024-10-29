// USERS
// cursos
// carreras
import mongoose, { Schema } from "mongoose";

const carreraSchema = new mongoose.Schema({
    name: String
})

const cursosSchema = new mongoose.Schema({
    title:  {type: String, required: true},
    description:  {type: String, required: true},
    tags: [{type:String}],
    // carrera: {
    //     type: Schema.Types.ObjectId, ref: 'carreras'
    // }
    carrera: [carreraSchema]
})



export default mongoose.model('cursos', cursosSchema)


// DOCUMENTOS EMBEBIDOS

// {
//     "_id": 1,
//     "nombre": "Juan Pérez",
//     "direcciones": [
//       { "id": 1, "dirección": "Calle Falsa 123" },
//       { "id": 2, "dirección": "Avenida Siempreviva 456" }
//     ]
//   }

// REFERENCIAS