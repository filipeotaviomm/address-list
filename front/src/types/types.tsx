import React, { ReactNode, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

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

export interface IUserContext {}

export interface IAddressContext {}
