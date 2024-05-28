import { Address } from "@prisma/client";
import { prisma } from "../app";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export const doesAddressExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const address: Address | null = await prisma.address.findUnique({
    where: { id: req.params.addressId },
  });

  if (!address) {
    throw new AppError("Address not found", 404);
  }

  res.locals.address = address;

  return next();
};
