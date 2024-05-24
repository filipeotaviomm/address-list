import "express-async-errors";
import express, { Application, json } from "express";
import { PrismaClient } from "@prisma/client";

export const app: Application = express();

export const prisma = new PrismaClient();

app.use(json());
