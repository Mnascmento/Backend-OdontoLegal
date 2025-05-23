import express from "express";
import {
    createCaso, 
    getAllCasos, 
    getCasoById, 
    updateCaso,
    deleteCaso
} from '../controllers/caso.controller.js';

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route('/')
    .get(authMiddleware("admin", "perito"), getAllCasos)
    .post(authMiddleware("admin", "perito"), createCaso);

router.route('/:id')
    .get(authMiddleware("admin", "perito"), getCasoById)
    .put(authMiddleware("admin", "perito"), updateCaso)
    .delete(authMiddleware("admin", "perito"), deleteCaso);

export default router;