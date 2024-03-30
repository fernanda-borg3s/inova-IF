import aprendizagemController from '../controllers/aprendizagem.controller.js'


import { Router } from 'express'
const aprendizagemRouter = Router();

aprendizagemRouter.get("/getObjetivo/:id", aprendizagemController.getObjetivoByComponente);


export default aprendizagemRouter;