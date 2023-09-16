import { Router } from "express";
import { getHistoriaFacturaciones, createHistoriaFacturaciones, updateHistoriaFacturacion, getHistoriaFacturacion, deleteHistoriaFacturacion } from "../controllers/historiafacturacion.controller.js";

const router = Router()

router.get('/historiaFacturacion',getHistoriaFacturaciones)

router.get('/historiaFacturacion/:id',getHistoriaFacturacion)

router.post('./historiaFacturacion',createHistoriaFacturaciones)

router.patch('/historiaFacturacion/:id',updateHistoriaFacturacion)

router.delete('/historiaFacturacion/:id',deleteHistoriaFacturacion)

export default router