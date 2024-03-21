import encontrosController from '../controllers/encontros.controller.js'

import { Router } from "express";

const encontrosRouter = Router();
// ISSO PODERA SER ACESSADO APENAS DEPOIS DA AUTENTETICAÇÃO 
    //PROFESSOR
encontrosRouter.post("/create", encontrosController.createEncontro);
encontrosRouter.get("/encontrosCadastrados", encontrosController.getAllEncontrosCadastrados);
encontrosRouter.get("/encontrosCadastrados/:id", encontrosController.getEncontroCadastradoById);
encontrosRouter.patch("/updateEncontro/:id", encontrosController.updateEncontroById);
encontrosRouter.delete("/deleteEncontro/:id", encontrosController.deleteEncontroById);

    //ALUNO
encontrosRouter.get("/encontrosDisponivel", encontrosController.getAllEncontrosDisponivel);




export default encontrosRouter;