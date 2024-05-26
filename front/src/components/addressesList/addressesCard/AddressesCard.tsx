import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ICardAddress } from "../../../types/types";
import { useAddressContext } from "../../../hooks/useAddressContext";

const AddressesCard = ({ address }: ICardAddress) => {
  const {} = useAddressContext();
  return (
    <li>
      <div>
        <div>
          <button
            // onClick={() => }
            title="Editar"
            aria-label="edit"
          >
            <MdOutlineModeEditOutline size={18} />
          </button>
          <button
            // onClick={() => }
            title="Remover"
            aria-label="remove"
          >
            <RiDeleteBin6Line size={18} />
          </button>
        </div>
      </div>
      <p>Cep: {address.zipCode}</p>
      <p>Rua: {address.street}</p>
      <p>Número: {address.number}</p>
      <p>Complement: {address.complement}</p>
      <p>Bairro: {address.neighborhood}</p>
      <p>Cidade: {address.city}</p>
      <p>Estado: {address.state}</p>
    </li>
  );
};

export default AddressesCard;
