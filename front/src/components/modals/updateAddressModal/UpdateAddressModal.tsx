import { IoClose } from "react-icons/io5";
import { useAddressContext } from "../../../hooks/useAddressContext";
import styles from "./style.module.scss";
import { IAddress } from "../../../types/types";
import UpdateAddressForm from "../../forms/updateAddressForm/UpdateAddressForm";

const UpdateAddressModal = () => {
  const { setEditingAddress } = useAddressContext();
  return (
    <div className={styles.update_modal_background}>
      <div className={styles.update_modal_container}>
        <button
          className={styles.close}
          onClick={() => setEditingAddress({} as IAddress)}
        >
          <IoClose />
        </button>
        <h1>Editar Endereço</h1>
        <UpdateAddressForm />
      </div>
    </div>
  );
};

export default UpdateAddressModal;
