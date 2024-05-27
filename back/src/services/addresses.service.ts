import { Address } from "@prisma/client";
import { prisma } from "../app";
import {
  IAddressReq,
  IAddressResp,
  IAddressUpdate,
  IAllAddressesResp,
} from "../interfaces/address.interface";
import { addressSchema, allAddressRespSchema } from "../schemas/address.schema";
import { createObjectCsvStringifier } from "csv-writer";

const createAddressService = async (
  userId: string,
  body: IAddressReq
): Promise<IAddressResp> => {
  const address: Address = await prisma.address.create({
    data: { ...body, userId },
  });

  return addressSchema.parse(address);
};

const getAllAddressesService = async (
  userId: string
): Promise<IAllAddressesResp> => {
  const addresses: Address[] = await prisma.address.findMany({
    where: { userId },
  });

  return allAddressRespSchema.parse(addresses);
};

const getAllAddressCsvService = async (userId: string): Promise<string> => {
  const addresses: Address[] = await prisma.address.findMany({
    where: { userId },
  });

  const csvStringifier = createObjectCsvStringifier({
    header: [
      { id: "id", title: "Id" },
      { id: "zipCode", title: "Cep" },
      { id: "street", title: "Logradouro" },
      { id: "number", title: "Número" },
      { id: "complement", title: "Complemento" },
      { id: "neighborhood", title: "Bairro" },
      { id: "city", title: "Cidade" },
      { id: "state", title: "Estado" },
    ],
  });

  const addressRecords = addresses.map((address) => ({
    id: address.id,
    zipCode: address.zipCode,
    street: address.street,
    number: address.number,
    complement: address.complement,
    neighborhood: address.neighborhood,
    city: address.city,
    state: address.state,
  }));

  return (
    csvStringifier.getHeaderString() +
    csvStringifier.stringifyRecords(addressRecords)
  );
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
  getAllAddressesService,
  getAllAddressCsvService,
  getAddressByIdService,
  updateAddressService,
  deleteAddressService,
};
