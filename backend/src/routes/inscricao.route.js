import inscricaoController from "../controllers/inscricao.controller.js";

import { Router } from "express";

const inscricaoRouter = Router();
inscricaoRouter.post("/inscrever", inscricaoController.inscreverEncontro);
inscricaoRouter.get("/inscritos/:id", inscricaoController.getEncontroInscritoById)


//Professora
inscricaoRouter.get("/listInscritos/:id/:id_encontro", inscricaoController.listInscritos)
inscricaoRouter.get("/exceptInscritos/:id/:id_encontro", inscricaoController.allAlunoExceptInscritos)
inscricaoRouter.get("/beforeRemove/:id", inscricaoController.inscritosBeforeRemoveEncontro)

//Gestor
inscricaoRouter.delete("/deleteinscricao/:id", inscricaoController.deleteInscricao)
inscricaoRouter.post("/addAluno", inscricaoController.addAluno)



export default inscricaoRouter;