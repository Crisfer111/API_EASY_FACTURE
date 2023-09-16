import { Router } from "express";
import { getConfiguraciones, createConfiguraciones, updateConfiguracion, getConfiguracion, deleteConfiguracion } from "../controllers/configuracion.controller.js";

const router = Router()

router.get('/configuracion',getConfiguraciones)

router.get('/configuracion/:id',getConfiguracion)

router.post('./configuracion',createConfiguraciones)

router.patch('/configuracion/:id',updateConfiguracion)

router.delete('/configuracion/:id',deleteConfiguracion)

export default router