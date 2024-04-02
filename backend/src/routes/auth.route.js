import authController from "../controllers/auth.controller.js";

import { Router } from "express";

const authRouter = Router();

authRouter.post("/loginAluna", authController.loginAluna);//funciona
authRouter.post("/loginProfessora", authController.loginProfessora);//funciona
authRouter.post("/cadastroAluna", authController.CadastroAluna);//funciona
authRouter.post("/cadastroProfessora", authController.CadastroProfessora);//funciona
authRouter.post("/verifica", authController.verificaController);


export default authRouter;