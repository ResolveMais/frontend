import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { InputContainer, Label, Input, ErrorMessage } from "../Input/styles";

const formatPhone = (value = "") => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return digits;

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);

  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  if (rest.length <= 8) {
    return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
  }
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
};

const PhoneInput = ({
  control,
  name = "phone",
  label = "Telefone:",
  placeholder = "(11) 99999-9999",
  errors,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => {
        const formattedValue = formatPhone(field.value || "");
        return (
          <InputContainer>
            <Label>{label}</Label>
            <Input
              {...props}
              value={formattedValue}
              onChange={(event) => field.onChange(formatPhone(event.target.value))}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
              placeholder={placeholder}
              inputMode="numeric"
              autoComplete="tel"
              maxLength={15}
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

export default PhoneInput;

PhoneInput.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
