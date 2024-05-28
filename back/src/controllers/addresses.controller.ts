import { Request, Response } from "express";
import {
  createAddressService,
  deleteAddressService,
  getAddressByIdService,
  getAllAddressCsvService,
  getAllAddressesService,
  updateAddressService,
} from "../services/addresses.service";

const createAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const address = await createAddressService(req.params.userId, req.body);

  return res.status(201).json(address);
};

const getAllAddressesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const addresses = await getAllAddressesService(req.params.userId);

  return res.status(200).json(addresses);
};

const getAllAddressCsvController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const csv = await getAllAddressCsvService(req.params.userId);

  res.header("Content-Type", "text/csv");
  res.attachment("addresses.csv");

  return res.send(csv);
};

const getAddressByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const address = await getAddressByIdService(res.locals.address.id);

  return res.status(200).json(address);
};

const updateAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const address = await updateAddressService(res.locals.address.id, req.body);

  return res.status(200).json(address);
};

const deleteAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteAddressService(res.locals.address.id);

  return res.status(204).json();
};

export {
  createAddressController,
  getAllAddressesController,
  getAllAddressCsvController,
  getAddressByIdController,
  updateAddressController,
  deleteAddressController,
};
