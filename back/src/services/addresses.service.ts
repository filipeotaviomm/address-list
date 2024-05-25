import { Address } from "@prisma/client";
import { prisma } from "../app";
import {
  IAddressReq,
  IAddressResp,
  IAddressUpdate,
  IAllAddressesResp,
} from "../interfaces/address.interface";
import { addressSchema, allAddressRespSchema } from "../schemas/address.schema";

const createAddressService = async (
  userId: string,
  body: IAddressReq
): Promise<IAddressResp> => {
  const address: Address = await prisma.address.create({
    data: { ...body, userId },
  });

  return addressSchema.parse(address);
};

const getAllContactService = async (
  userId: string
): Promise<IAllAddressesResp> => {
  const addresses: Address[] = await prisma.address.findMany({
    where: { userId },
  });

  return allAddressRespSchema.parse(addresses);
};

const getAddressByIdService = async (
  addressId: string
): Promise<IAddressResp | null> => {
  const address: Address | null = await prisma.address.findUnique({
    where: { id: addressId },
  });

  return address;
};

const updateAddressService = async (
  addressId: string,
  body: IAddressUpdate
): Promise<IAddressResp> => {
  const address = prisma.address.update({
    where: { id: addressId },
    data: body,
  });

  return address;
};

const deleteAddressService = async (addressId: string): Promise<void> => {
  await prisma.address.delete({ where: { id: addressId } });
};

export {
  createAddressService,
  getAllContactService,
  getAddressByIdService,
  updateAddressService,
  deleteAddressService,
};
