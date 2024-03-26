import inscricaoController from "../controllers/inscricao.controller.js";

import { Router } from "express";

const inscricaoRouter = Router();

inscricaoRouter.post("/inscrever", inscricaoController.inscreverEncontro);
inscricaoRouter.get("/inscritos/:id", inscricaoController.getEncontroInscritoById)
inscricaoRouter.delete("/deleteinscricao/:id", inscricaoController.deleteInscricao)

export default inscricaoRouter;