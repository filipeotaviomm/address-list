import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";
import { router } from "./routers/index.router";
import { handleError } from "./errors";
import cors from "cors";

export const app: Application = express();

export const prisma = new PrismaClient();

app.use(cors());

app.use(json());

app.use("/", router);

app.use(handleError);
