import AddressesCard from "./addressesCard/AddressesCard";
import { IAddress } from "../../types/types";
import { useAddressContext } from "../../hooks/useAddressContext";

const AddressesList = () => {
  const { addressesList } = useAddressContext();
  return (
    <div>
      <ul>
        {addressesList.map((address: IAddress) => (
          <AddressesCard key={address.id} address={address} />
        ))}
      </ul>
    </div>
  );
};

export default AddressesList;
