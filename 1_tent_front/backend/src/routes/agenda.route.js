import express from 'express';
import { Router } from "express";
const router = Router()

import AgendaController from '../controllers/agenda.controller.js'

router.get("/", AgendaController.getAllEncontros)
router.get("/:id", AgendaController.getById)
router.post("/", AgendaController.createEncontro)
router.put("/:id", AgendaController.updateById)
router.delete("/:id", AgendaController.deleteById)

export default router;