import express from "express";
import userController from "../controllers/users.controller.js";
import { validateUser } from "../middlewares/validation.users.js";

const router = express.Router();

router.get("/", userController.getUsers)                       //Obtener usarios
router.post("/", validateUser, userController.postUsers)       //Agregar usuario
router.put("/:id", validateUser, userController.putUsers)      //Actualizar usuario
router.get("/age/:range", userController.getUsersByRange)      //Filtrar por range


export default router