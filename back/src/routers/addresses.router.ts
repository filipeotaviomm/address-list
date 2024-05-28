import { Router } from "express";
import { validateBody } from "../middlewares/globals.middleware";
import {
  addressReqSchema,
  addressUpdateSchema,
} from "../schemas/address.schema";
import {
  createAddressController,
  deleteAddressController,
  getAddressByIdController,
  getAllAddressCsvController,
  getAllAddressesController,
  updateAddressController,
} from "../controllers/addresses.controller";
import { doesAddressExist } from "../middlewares/addresses.middleware";

export const addressRouter: Router = Router();

addressRouter.post(
  "/user/:userId",
  validateBody(addressReqSchema),
  createAddressController
);

addressRouter.get("/all/user/:userId", getAllAddressesController);

addressRouter.get("/export/csv/user/:userId", getAllAddressCsvController);

addressRouter.get("/:addressId", doesAddressExist, getAddressByIdController);

addressRouter.patch(
  "/:addressId",
  doesAddressExist,
  validateBody(addressUpdateSchema),
  updateAddressController
);

addressRouter.delete("/:addressId", doesAddressExist, deleteAddressController);
