import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../../../types/types";

const Input = forwardRef(
  (
    { error, label, id, readOnly, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input readOnly={readOnly} id={id} ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);

export { Input };
