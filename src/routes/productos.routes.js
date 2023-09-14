import { Router } from "express";
import { getProductos, createProductos, updateProducto, getProducto, deleteProducto } from "../controllers/productos.controllers.js";

const router = Router()

router.get('/productos',getProductos)

router.get('/productos/:id',getProducto)

router.post('./productos',createProductos)

router.patch('/productos/:id',updateProducto)

router.delete('/productos/:id',deleteProducto)

export default router