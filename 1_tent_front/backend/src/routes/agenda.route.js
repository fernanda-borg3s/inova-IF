import AgendaController from '../controllers/agenda.controller.js'

import { Router } from "express";

const agendaRouter = Router();

agendaRouter.get("/datas", AgendaController.getById)
// router.get("/:id", AgendaController.getById)
// router.post("/", AgendaController.createEncontro)
// router.put("/:id", AgendaController.updateById)
// router.delete("/:id", AgendaController.deleteById)

export default agendaRouter;