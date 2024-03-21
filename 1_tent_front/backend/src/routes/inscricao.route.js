import inscricaoController from "../controllers/inscricao.controller";

import { Router } from "express";

const inscricaoRouter = Router();

inscricaoRouter.post("/inscrever", inscricaoController.inscreverEncontro);
inscricaoRouter.get("/inscritos", inscricaoController.getEncontroInscritoById)
inscricaoRouter.delete("/deleteinscricao/:id", inscricaoController.deleteInscricao)

export default inscricaoRouter;