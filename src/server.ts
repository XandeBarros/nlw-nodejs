import express from 'express';
import 'reflect-metadata';
import { router } from "./routes";
import "./database"

const app = express();

app.use(express.json());

app.use(router);

app.listen(5500, () => console.log("Server rodando na porta 5500\nhttp://localhost:5500"));
