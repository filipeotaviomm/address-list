import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, _res: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);

    return next();
  };
