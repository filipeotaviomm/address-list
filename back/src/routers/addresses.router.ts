import { Router } from "express";
import { isUserLogged } from "../middlewares/users.middleware";
import { validateBody } from "../middlewares/globals.middleware";
import {
  addressReqSchema,
  addressUpdateSchema,
} from "../schemas/address.schema";
import {
  createAddressController,
  deleteAddressController,
  getAddressByIdController,
  getAllAddressesController,
  updateAddressController,
} from "../controllers/addresses.controller";
import { doesAddressExist } from "../middlewares/addresses.middleware";

export const addressRouter: Router = Router();

addressRouter.post(
  "/",
  isUserLogged,
  validateBody(addressReqSchema),
  createAddressController
);

addressRouter.get("/", isUserLogged, getAllAddressesController);

addressRouter.get(
  "/:addressId",
  isUserLogged,
  doesAddressExist,
  getAddressByIdController
);

addressRouter.get("/all", isUserLogged, getAllAddressesController);

addressRouter.patch(
  "/:addressId",
  isUserLogged,
  doesAddressExist,
  validateBody(addressUpdateSchema),
  updateAddressController
);

addressRouter.delete(
  "/:addressId",
  isUserLogged,
  doesAddressExist,
  deleteAddressController
);
