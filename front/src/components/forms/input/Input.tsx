import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../../../types/types";
import styles from "./style.module.scss";

const Input = forwardRef(
  (
    { error, label, id, readOnly, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.div_input}>
        <label className="p2 lg" htmlFor={id}>
          {label}
        </label>
        <input readOnly={readOnly} id={id} ref={ref} {...rest} />
        {error ? <p className={styles.error}>{error.message}</p> : null}
      </div>
    );
  }
);

export { Input };
