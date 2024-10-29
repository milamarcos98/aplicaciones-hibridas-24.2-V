import Cursos from "../model/cursosModel.js"
import { cursosValidacion } from "../validation/validations.js";

export const createCurso = async (req, res) => {
    // validacion
    // const {error} = cursosValidacion(req.body);
    // console.log(error)
    // if(error) return res.status(400).json({error: error.details[0].message})
    try{
        // insercion INSERT INTO
        const curso = new Cursos({...req.body});
        const savedCourse = await curso.save();
        res.json(savedCourse)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const getCursos = async (req, res) => {
    try{
        const cursos = await Cursos.find().populate('carrera');
        res.json(cursos)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const getCursosById = async (req, res) => {
    try{
        const curso = await Cursos.findById(req.params.id);
        if(!curso) return res.status(404).json({error: "not found"})
        res.json(curso)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const updateCursos = async (req, res) => {
    try{
        const updatedCourse = await Cursos.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedCourse)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export const deleteCursos = async (req, res) => {
    try{
        const deletedCourse = await Cursos.findByIdAndDelete(req.params.id)
        res.json(deletedCourse)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}


export const searchByTag = async (req, res) => {
    try{
        // ?tags=node,javascript,backend
        const tags = req.query.tags.split(',') // ["node","javascript","backend"]
        const cursos = await Cursos.find({tags: {$in: tags}});
        res.json(cursos)
    }catch(err){
        res.status(400).json({error: err.message})
    }
}