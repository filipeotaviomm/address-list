import React, { ReactNode, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IRegisterFormValues } from "../components/forms/registerForm/registerFormSchema";
import { ILoginFormValues } from "../components/forms/loginForm/loginFormSchema";
import { ICreateAddressFormValues } from "../components/forms/createAddressForm/CreateAddressFormSchema";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
  label?: string;
  id?: string;
  readOnly?: boolean;
}

export interface IChildren {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  userName: string;
}

export interface IUserContext {
  userRegister: (
    formData: IRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => Promise<void>;

  userLogin: (
    formData: ILoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => Promise<void>;

  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;

  updateUser: (
    formData: ILoginFormValues, //tem que mudar
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  isUpdateUserModalOpen: boolean;
  setIsUpdateUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  deleteUser: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  confirmDeleteUser: boolean;
  setConfirmDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;

  isUserLogged: boolean;
}

export interface IAddressContext {
  addressesList: IAddress[] | [];
  setAddressesList: React.Dispatch<React.SetStateAction<[] | IAddress[]>>;

  loading: boolean;

  createAddressModalIsVisible: boolean;
  setCreateAddressModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;

  createAddress: (
    formData: ICreateAddressFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void
  ) => Promise<void>;

  editingAddress: IAddress;
  setEditingAddress: React.Dispatch<React.SetStateAction<IAddress>>;

  updateAddress: (
    formData: ICreateAddressFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  confirmDeleteAddress: IAddress;
  setConfirmDeleteAddress: React.Dispatch<React.SetStateAction<IAddress>>;

  deleteAddress: (
    removedId: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  getAddressByCep: (cep: string) => Promise<any>;
}

export interface IAddress {
  id: string;
  zipCode: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  userId: string;
}

export interface ICardAddress {
  address: IAddress;
}
