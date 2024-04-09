import inscricaoController from "../controllers/inscricao.controller.js";
// import authMiddleware from '../middleware/auth.middleware.js';

import { Router } from "express";

const inscricaoRouter = Router();
// inscricaoRouter.use(authMiddleware)
inscricaoRouter.post("/inscrever", inscricaoController.inscreverEncontro);
inscricaoRouter.get("/inscritos/:id", inscricaoController.getEncontroInscritoById)
inscricaoRouter.delete("/deleteinscricao/:id", inscricaoController.deleteInscricao)

//Professora
inscricaoRouter.get("/listInscritos/:id/:id_encontro", inscricaoController.listInscritos)
inscricaoRouter.get("/exceptInscritos/:id/:id_encontro", inscricaoController.allAlunoExceptInscritos)

//Gestor
// inscricaoRouter.delete("/deleteAluno/:id", inscricaoController.deleteAluno)
inscricaoRouter.post("/addAluno", inscricaoController.addAluno)



export default inscricaoRouter;