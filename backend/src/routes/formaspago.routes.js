import { Router } from "express";
import { getFormasPagos, createFormasPagos, updateFormasPago, getFormasPago, deleteFormasPago } from "../controllers/formaspago.controller.js";

const router = Router()

router.get('/formaspago',getFormasPagos)

router.get('/formasPago/:id',getFormasPago)

router.post('./formasPago',createFormasPagos)

router.patch('/formasPago/:id',updateFormasPago)

router.delete('/formasPago/:id',deleteFormasPago)

export default router