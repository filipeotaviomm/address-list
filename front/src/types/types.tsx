import React, { ReactNode, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IRegisterFormValues } from "../components/forms/registerForm/registerFormSchema";
import { ILoginFormValues } from "../components/forms/loginForm/loginFormSchema";

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
}

export interface IAddressContext {}
