import { createContext } from "react";
import { IChildren, IAddressContext } from "../types/types";

export const AddressContext = createContext<IAddressContext>(
  {} as IAddressContext
);

export const AddressProvider = ({ children }: IChildren) => {
  return (
    <AddressContext.Provider value={{}}>{children}</AddressContext.Provider>
  );
};
