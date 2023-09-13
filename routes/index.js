import express from "express";
import usuarioController from "../controller/usuario.controller.js";

const router = express.Router();
// Routes = Endpoint
router.get('/usuario/:id', usuarioController.getUsuarioById);
router.post('/usuario', usuarioController.createUsuario); 
router.put('/usuario/:id', usuarioController.updateUsuario); 
router.delete('/usuario/:id', usuarioController.deleteUsuario); 

export default router