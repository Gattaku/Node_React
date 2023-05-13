// const express = require("express"); //commonjsの書き方。Node.jsはCommonjs
import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todo";
import { json } from "body-parser";


const app = express();
app.use(json());


const PORT = 3000;

app.use("/todo", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
})

app.listen(PORT);