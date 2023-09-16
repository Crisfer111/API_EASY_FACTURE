import { Router } from "express";
import { getClientes, createClientes, updateCliente, getCliente, deleteCliente } from "../controllers/clientes.controllers.js";

const router = Router()

router.get('/clientes',getClientes)

router.get('/clientes/:id',getCliente)

router.post('./clientes',createClientes)

router.patch('/clientes/:id',updateCliente)

router.delete('/clientes/:id',deleteCliente)

export default router