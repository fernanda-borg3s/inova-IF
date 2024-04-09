import encontrosController from '../controllers/encontros.controller.js'
// import authMiddleware from '../middleware/auth.middleware.js';

import { Router } from "express";

const encontrosRouter = Router();
// ISSO PODERA SER ACESSADO APENAS DEPOIS DA AUTENTETICAÇÃO 
    //PROFESSOR
// encontrosRouter.use(authMiddleware) //rotas privadas, so entra se tiver token(testar separadamente para professor)
encontrosRouter.post("/create", encontrosController.createEncontro);
encontrosRouter.get("/encontrosCadastrados/:id", encontrosController.getAllEncontrosCadastrados);
encontrosRouter.get("/myCadastros/:id", encontrosController.getMyCadastros);
encontrosRouter.get("/editCadastro/:id/:id_encontro", encontrosController.getEditCadastro);
// encontrosRouter.get("/encontrosCadastrados/:id", encontrosController.getEncontroCadastradoById);
encontrosRouter.put("/updateEncontro/:id", encontrosController.updateEncontroById);
encontrosRouter.delete("/deleteEncontro/:id", encontrosController.deleteEncontroById);

    //ALUNO
encontrosRouter.get("/encontrosDisponivel/:id", encontrosController.getAllEncontrosDisponivel);




export default encontrosRouter;