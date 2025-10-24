import express from "express";
import userController from "../controllers/users.controller.js";
import { validateUser } from "../middlewares/validation.users.js";

const router = express.Router();

router.get("/", userController.getUsers)
router.post("/", validateUser, userController.postUsers)
router.put("/:id", validateUser, userController.putUsers)      // 5. Actualizar usuario
router.get("/age/:range", userController.getUsersByRange)     // 4. Filtrar por rango


export default router