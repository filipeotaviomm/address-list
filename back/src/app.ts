import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { router } from "./routers/index.router";

export const app: Application = express();

export const prisma = new PrismaClient();

app.use(json());

app.use("/", router);
