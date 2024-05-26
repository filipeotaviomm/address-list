import { createContext, useEffect, useState } from "react";
import { IChildren, IAddressContext, IAddress } from "../types/types";
import { useUserContext } from "../hooks/useUserContext";
import { api } from "../services/api";
import { ICreateAddressFormValues } from "../components/forms/createAddressForm/CreateAddressFormSchema";
import { toast } from "react-toastify";

export const AddressContext = createContext<IAddressContext>(
  {} as IAddressContext
);

export const AddressProvider = ({ children }: IChildren) => {
  const { isUserLogged } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [addressesList, setAddressesList] = useState<IAddress[] | []>([]);
  const [createAddressModalIsVisible, setCreateAddressModalIsVisible] =
    useState(false);

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

  const createAddress = async (
    formData: ICreateAddressFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => {
    try {
      const token: string | null = localStorage.getItem("@address-list:token");
      setLoading(true);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("/address", formData);
      setAddressesList([...addressesList, response.data]);
      toast.success("Endereço criado com sucesso");
      setCreateAddressModalIsVisible(false);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        addressesList,
        setAddressesList,
        loading,
        createAddressModalIsVisible,
        setCreateAddressModalIsVisible,
        createAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
