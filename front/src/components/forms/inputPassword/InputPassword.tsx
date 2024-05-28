import { useState, forwardRef, ForwardedRef } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { IInputProps } from "../../../types/types";
import styles from "./style.module.scss";

const InputPassword = forwardRef(
  (
    { error, label, id, readOnly, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isHidden, setIsHidden] = useState(true);

    return (
      <div className={styles.input_password}>
        <label className="p2 lg" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type={isHidden ? "password" : "text"}
          readOnly={readOnly}
          ref={ref}
          {...rest}
        />
        <button type="button" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? (
            <MdVisibilityOff size={15} />
          ) : (
            <MdVisibility size={15} />
          )}
        </button>
        {error ? <p className={styles.error}>{error.message}</p> : null}
      </div>
    );
  }
);

export { InputPassword };
