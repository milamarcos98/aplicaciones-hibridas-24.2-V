import express from "express";
import { createCurso, deleteCursos, getCursos, getCursosById, searchByTag, updateCursos } from "../controllers/cursosController.js";

const router = express.Router();

router.post('/', createCurso);
router.get('/', getCursos);
router.get('/:id', getCursosById);
router.get('/search/tags', searchByTag);
router.put('/:id', updateCursos);
router.delete('/:id', deleteCursos);

export default router;