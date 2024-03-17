import express from 'express';
// import pg from 'pg';
import "dotenv/config";
import cors from "cors";

import agendaRouter from './src/routes/agenda.router.js'
const app = express();
app.use(cors());
app.use(express.json())
app.use(agendaRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port: ${port}`));

