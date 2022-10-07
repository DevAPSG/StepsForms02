import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

// const defaultValues = {
//   times: new Date(),
// };
const PrimeiroForm = ({ control, name, mask }) => {
  return (
    <form className="form">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="time"
            className="input"
            onChange={(e) => field.onChange(e)}
            selected={field.value}
            locate="ptBR"
            required
            min="08:00"
            max="18:00"
          />
        )}
      />
    </form>
  );
};
export default PrimeiroForm;
