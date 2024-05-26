import { ImSpinner3 } from "react-icons/im";
import { Input } from "../input/Input";
import styles from "./style.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddressContext } from "../../../hooks/useAddressContext";
import {
  CreateAddressFormSchema,
  ICreateAddressFormValues,
} from "../createAddressForm/CreateAddressFormSchema";

const UpdateAddressForm = () => {
  const { updateAddress, editingAddress } = useAddressContext();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateAddressFormValues>({
    resolver: zodResolver(CreateAddressFormSchema),
    values: {
      zipCode: editingAddress.zipCode,
      street: editingAddress.street,
      number: editingAddress.number,
      complement: editingAddress.complement,
      neighborhood: editingAddress.neighborhood,
      city: editingAddress.city,
      state: editingAddress.state,
    },
  });
  const create = (formData: ICreateAddressFormValues) => {
    updateAddress(formData, setLoading);
  };
  return (
    <form className={styles.create_form} onSubmit={handleSubmit(create)}>
      <div className={styles.both_sides}>
        <div className={styles.left_side}>
          <Input
            className={styles.input}
            label="Cep"
            type="text"
            id="zipCode"
            placeholder="Digite o cep"
            {...register("zipCode")}
            error={errors.zipCode}
            disabled={loading}
          />
          <Input
            className={styles.input}
            label="Rua"
            type="text"
            id="street"
            placeholder="Digite o nome da rua"
            {...register("street")}
            error={errors.street}
            disabled={loading}
          />
          <Input
            className={styles.input}
            label="Número"
            type="number"
            id="number"
            placeholder="Digite o número"
            {...register("number")}
            error={errors.number}
            disabled={loading}
          />
          <Input
            className={styles.input}
            label="Complemento"
            type="text"
            id="complement"
            placeholder="Digite um complemento"
            {...register("complement")}
            error={errors.complement}
            disabled={loading}
          />
        </div>
        <div className={styles.right_side}>
          <Input
            className={styles.input}
            label="Bairro"
            type="text"
            id="neighborhood"
            placeholder="Digite o bairro"
            {...register("neighborhood")}
            error={errors.neighborhood}
            disabled={loading}
          />
          <Input
            className={styles.input}
            label="Cidade"
            type="text"
            id="city"
            placeholder="Digite o bairro"
            {...register("city")}
            error={errors.city}
            disabled={loading}
          />
          <Input
            className={styles.input}
            label="Estado"
            type="text"
            id="state"
            placeholder="Digite o bairro"
            {...register("state")}
            error={errors.state}
            disabled={loading}
          />
        </div>
      </div>
      <div className={styles.div_btn_create}>
        <button
          className={`${styles.btn_create} p2 lg`}
          type="submit"
          disabled={loading}
        >
          {loading ? <ImSpinner3 /> : "Editar"}
        </button>
      </div>
    </form>
  );
};

export default UpdateAddressForm;
