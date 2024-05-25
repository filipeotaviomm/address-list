import { Request, Response } from "express";
import {
  createAddressService,
  deleteAddressService,
  getAddressByIdService,
  getAllAddressesService,
  updateAddressService,
} from "../services/addresses.service";

const createAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const address = await createAddressService(res.locals.decoded.sub, req.body);

  return res.status(201).json(address);
};

const getAllAddressesController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const addresses = await getAllAddressesService(res.locals.decoded.sub);

  return res.status(200).json(addresses);
};

const getAddressByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const address = await getAddressByIdService(req.params.addressId);

  return res.status(200).json(address);
};

const updateAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const address = await updateAddressService(req.params.addressId, req.body);

  return res.status(200).json(address);
};

const deleteAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteAddressService(req.params.addressId);

  return res.status(204).json();
};

export {
  createAddressController,
  getAllAddressesController,
  getAddressByIdController,
  updateAddressController,
  deleteAddressController,
};
