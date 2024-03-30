import { Router } from "express";
import authRouter from './auth.route.js'
import encontrosRouter from './encontros.route.js'
import aprendizagemRouter from './aprendizagem.route.js'
import agendaRouter from './agenda.route.js'
import inscricaoRouter from "./inscricao.route.js";



const router = Router();
router.use("/auth", authRouter);
router.use("/encontros", encontrosRouter);
router.use("/aprendizagem", aprendizagemRouter);
router.use("/agenda", agendaRouter);
router.use("/inscricao", inscricaoRouter);
router.use("/user", inscricaoRouter);

export default router;

// router.use("/doc", swaggerRouter);