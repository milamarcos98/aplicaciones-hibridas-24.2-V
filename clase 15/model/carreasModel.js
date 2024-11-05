import mongoose from "mongoose";

const carrerasSchema = new mongoose.Schema({
    name:  {type: String, required: true}
})

export default mongoose.model('carreras', carrerasSchema)