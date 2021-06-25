import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors"
import 'reflect-metadata';
import { router } from "./routes";
import "./database"

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
}) 

app.listen(5500, () => console.log("Server rodando na porta 5500\nhttp://localhost:5500"));
