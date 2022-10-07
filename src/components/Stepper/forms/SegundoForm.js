import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  cpf: "",
};
function SegundoForm({ mask, placeH }) {
  const { register, handleSubmit, control } = useForm({
    defaultValues,
  });

  const enviar = (allValues) => {
    console.log(allValues);
  };
  return (
    <form className="form">
      <Controller
        name="cpf"
        control={control}
        render={({ field: { onChange, value } }) => (
          <InputMask mask={mask} value={value} onChange={onChange} required>
            {(inputProps) => (
              <input
                {...inputProps}
                type="tel"
                className="input"
                placeholder={placeH}
                required
                // disableUnderline
              />
            )}
          </InputMask>
        )}
      />
    </form>
  );
}
export default SegundoForm;
