import inscricaoController from "../controllers/inscricao.controller.js";
// import authMiddleware from '../middleware/auth.middleware.js';

import { Router } from "express";

const inscricaoRouter = Router();
// inscricaoRouter.use(authMiddleware)
inscricaoRouter.post("/inscrever", inscricaoController.inscreverEncontro);
inscricaoRouter.get("/inscritos/:id", inscricaoController.getEncontroInscritoById)
inscricaoRouter.delete("/deleteinscricao/:id", inscricaoController.deleteInscricao)

//Professora
inscricaoRouter.get("/listInscritos/:id", inscricaoController.listInscritos)
//Gestor
inscricaoRouter.delete("/deleteAluno/:id", inscricaoController.deleteAluno)
inscricaoRouter.post("/addAluno/:id", inscricaoController.addAluno)



export default inscricaoRouter;