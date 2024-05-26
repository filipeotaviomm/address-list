import { createContext, useEffect, useState } from "react";
import { IChildren, IAddressContext, IAddress } from "../types/types";
import { useUserContext } from "../hooks/useUserContext";
import { api } from "../services/api";

export const AddressContext = createContext<IAddressContext>(
  {} as IAddressContext
);

export const AddressProvider = ({ children }: IChildren) => {
  const { isUserLogged } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [addressesList, setAddressesList] = useState<IAddress[] | []>([]);

  useEffect(() => {
    const getAllAddresses = async () => {
      const token: string | null = localStorage.getItem("@address-list:token");
      // if (token) {
      try {
        setLoading(true);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get("/address/all");
        setAddressesList(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
      // }
    };
    getAllAddresses();
  }, [isUserLogged]);
  return (
    <AddressContext.Provider
      value={{ addressesList, setAddressesList, loading }}
    >
      {children}
    </AddressContext.Provider>
  );
};
