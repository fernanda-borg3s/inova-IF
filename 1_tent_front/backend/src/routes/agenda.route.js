import AgendaController from '../controllers/agenda.controller.js'
import authMiddleware from '../middleware/auth.middleware.js';
import { Router } from "express";

const agendaRouter = Router();
agendaRouter.use(authMiddleware) //rotas privadas, so entra se tiver token
agendaRouter.get("/datas", AgendaController.getById)
// router.get("/:id", AgendaController.getById)
// router.post("/", AgendaController.createEncontro)
// router.put("/:id", AgendaController.updateById)
// router.delete("/:id", AgendaController.deleteById)

export default agendaRouter;