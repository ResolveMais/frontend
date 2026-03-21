import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { InputContainer, Label, Input, ErrorMessage } from "../Input/styles";

const formatCpf = (value = "") => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";

  const part1 = digits.slice(0, 3);
  const part2 = digits.slice(3, 6);
  const part3 = digits.slice(6, 9);
  const part4 = digits.slice(9, 11);

  if (digits.length <= 3) return part1;
  if (digits.length <= 6) return `${part1}.${part2}`;
  if (digits.length <= 9) return `${part1}.${part2}.${part3}`;
  return `${part1}.${part2}.${part3}-${part4}`;
};

const CpfInput = ({
  control,
  name = "cpf",
  label = "CPF:",
  placeholder = "000.000.000-00",
  errors,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => {
        const formattedValue = formatCpf(field.value || "");
        return (
          <InputContainer>
            <Label>{label}</Label>
            <Input
              {...props}
              value={formattedValue}
              onChange={(event) => field.onChange(formatCpf(event.target.value))}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
              placeholder={placeholder}
              inputMode="numeric"
              autoComplete="off"
              maxLength={14}
            />
            {errors && (
              <ErrorMessage>
                {errors?.message || errors || "Este campo e obrigatorio"}
              </ErrorMessage>
            )}
          </InputContainer>
        );
      }}
    />
  );
};

export default CpfInput;

CpfInput.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
