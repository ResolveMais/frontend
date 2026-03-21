import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { InputContainer, Label, Input, ErrorMessage } from "../Input/styles";

const formatCnpj = (value = "") => {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  if (digits.length <= 12) {
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
  }
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
};

const CnpjInput = ({
  control,
  name = "cnpj",
  label = "CNPJ:",
  placeholder = "00.000.000/0000-00",
  errors,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => {
        const formattedValue = formatCnpj(field.value || "");
        return (
          <InputContainer>
            <Label>{label}</Label>
            <Input
              {...props}
              value={formattedValue}
              onChange={(event) => field.onChange(formatCnpj(event.target.value))}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
              placeholder={placeholder}
              inputMode="numeric"
              autoComplete="off"
              maxLength={18}
            />
            {errors && (
              <ErrorMessage>
                {errors?.message || errors || "Este campo é obrigatório"}
              </ErrorMessage>
            )}
          </InputContainer>
        );
      }}
    />
  );
};

export default CnpjInput;

CnpjInput.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
