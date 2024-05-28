import { IoClose } from "react-icons/io5";
import CreateAddressForm from "../../forms/createAddressForm/CreateAddressForm";
import { useAddressContext } from "../../../hooks/useAddressContext";
import styles from "./style.module.scss";

const CreateAddressModal = () => {
  const { setCreateAddressModalIsVisible } = useAddressContext();
  return (
    <div className={styles.create_modal_background}>
      <div className={styles.create_modal_container}>
        <button
          className={styles.close}
          onClick={() => setCreateAddressModalIsVisible(false)}
        >
          <IoClose />
        </button>
        <h1>Novo Endereço</h1>
        <CreateAddressForm />
      </div>
    </div>
  );
};

export default CreateAddressModal;
