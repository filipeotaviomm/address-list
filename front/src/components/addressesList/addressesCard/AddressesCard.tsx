import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ICardAddress } from "../../../types/types";
import { useAddressContext } from "../../../hooks/useAddressContext";
import styles from "./style.module.scss";

const AddressesCard = ({ address }: ICardAddress) => {
  const { setEditingAddress, setConfirmDeleteAddress } = useAddressContext();
  const formattedZipCode = `${address.zipCode.slice(
    0,
    5
  )}-${address.zipCode.slice(5)}`;

  return (
    <li className={styles.li_cards}>
      <div>
        <div className={styles.edit_remove_buttons}>
          <button
            onClick={() => setEditingAddress(address)}
            title="Editar"
            aria-label="edit"
          >
            <MdOutlineModeEditOutline size={18} />
          </button>
          <button
            onClick={() => setConfirmDeleteAddress(address)}
            title="Remover"
            aria-label="remove"
          >
            <RiDeleteBin6Line size={18} />
          </button>
        </div>
      </div>
      <p>
        <span className="p2 lg">Cep:</span> {formattedZipCode}
      </p>
      <p>
        <span className="p2 lg">Rua:</span>
        {address.street}
      </p>
      <p>
        <span className="p2 lg">Número:</span> {address.number}
      </p>
      <p>
        <span className="p2 lg">Complemento:</span> {address.complement}
      </p>
      <p>
        <span className="p2 lg">Bairro:</span> {address.neighborhood}
      </p>
      <p>
        <span className="p2 lg">Cidade:</span> {address.city}
      </p>
      <p>
        <span className="p2 lg">Estado:</span> {address.state}
      </p>
    </li>
  );
};

export default AddressesCard;
