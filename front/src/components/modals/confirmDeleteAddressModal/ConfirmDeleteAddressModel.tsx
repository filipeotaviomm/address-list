import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IAddress } from "../../../types/types";
import styles from "./style.module.scss";
import { useAddressContext } from "../../../hooks/useAddressContext";

const ConfirmDeleteAddressModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { confirmDeleteAddress, setConfirmDeleteAddress, deleteAddress } =
    useAddressContext();

  return (
    <div className={styles.delete_modal_background}>
      <div className={styles.modal_box}>
        <button
          onClick={() => setConfirmDeleteAddress({} as IAddress)}
          className={styles.close}
        >
          <IoClose />
        </button>
        <div className={styles.modal_body}>
          <p>
            Você tem certeza que deseja deletar o endereço: "
            {confirmDeleteAddress.street}"?
          </p>
          <div className={styles.btns}>
            <button
              disabled={loading}
              onClick={() => deleteAddress(confirmDeleteAddress.id, setLoading)}
              className={`${styles.btn_yes_no} ${styles.yes}`}
            >
              Sim, quero remover
            </button>
            <button
              disabled={loading}
              onClick={() => setConfirmDeleteAddress({} as IAddress)}
              className={`${styles.btn_yes_no} ${styles.no}`}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteAddressModal;
