import AddressesCard from "./addressesCard/AddressesCard";
import { IAddress } from "../../types/types";
import { useAddressContext } from "../../hooks/useAddressContext";
import styles from "./style.module.scss";
import { CiCirclePlus } from "react-icons/ci";

const AddressesList = () => {
  const { addressesList } = useAddressContext();
  return (
    <div className={styles.cards_list}>
      <div className={styles.title_list}>
        <h1>Lista de Endereços:</h1>
      </div>
      <div className={styles.plus_button}>
        <button>
          <p className="p2 lg">Criar Endereço</p>
          <CiCirclePlus size={30} />
        </button>
      </div>

      <ul>
        {addressesList.map((address: IAddress) => (
          <AddressesCard key={address.id} address={address} />
        ))}
      </ul>
    </div>
  );
};

export default AddressesList;
