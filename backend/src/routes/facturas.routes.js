import { Router } from "express";
import { getFacturas, createFacturas, updateFactura, getFactura, deleteFactura } from "../controllers/facturas.controller.js";

const router = Router()

router.get('/facturas',getFacturas)

router.get('/facturas/:id',getFactura)

router.post('./facturas',createFacturas)

router.patch('/facturas/:id',updateFactura)

router.delete('/facturas/:id',deleteFactura)

export default router