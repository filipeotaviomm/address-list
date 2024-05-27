import { createContext, useEffect, useState } from "react";
import { IChildren, IAddressContext, IAddress } from "../types/types";
import { useUserContext } from "../hooks/useUserContext";
import { api, viacepApi } from "../services/api";
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
  const [editingAddress, setEditingAddress] = useState({} as IAddress);
  const [confirmDeleteAddress, setConfirmDeleteAddress] = useState<IAddress>(
    {} as IAddress
  );

  useEffect(() => {
    const getAllAddresses = async () => {
      const token: string | null = localStorage.getItem("@address-list:token");
      if (token) {
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
      }
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

  const updateAddress = async (
    formData: ICreateAddressFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const token: string | null = localStorage.getItem("@address-list:token");
    if (token) {
      setLoading(true);
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.patch(
          `./address/${editingAddress.id}`,
          formData
        );

        const newAddressesList = addressesList.map((addr) => {
          if (addr.id === editingAddress.id) {
            return response.data;
          } else {
            return addr;
          }
        });
        setAddressesList(newAddressesList);
        toast.success("Endereço atualizado com sucesso");
        setEditingAddress({} as IAddress);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const deleteAddress = async (
    removedId: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const token: string | null = localStorage.getItem("@address-list:token");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.delete(`/address/${removedId}`);
      setConfirmDeleteAddress({} as IAddress);
      toast.success("Endereço deletado com sucesso");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    const addressesListFiltered = addressesList.filter(
      (addr) => addr.id !== removedId
    );
    setAddressesList(addressesListFiltered);
  };

  const getAddressByCep = async (cep: string) => {
    try {
      const response = await viacepApi.get(`${cep}/json/`);
      return response.data;
    } catch (error) {
      console.log(error);
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
        editingAddress,
        setEditingAddress,
        updateAddress,
        confirmDeleteAddress,
        setConfirmDeleteAddress,
        deleteAddress,
        getAddressByCep,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
