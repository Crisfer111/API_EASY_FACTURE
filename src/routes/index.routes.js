import { Router } from "express";
import { getEmployees, createEmployees, updateEmployee, deleteEmployee, getEmployee } from "../controllers/employees.controller.js"
import { ping } from "../controllers/index.controller.js";

const router = Router()

router.get('/ping',ping)

export default router