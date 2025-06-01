import React from 'react'
import * as S from "./styles"
import PropTypes from 'prop-types'

const Input = ({ placeholder, label, register, errors, ...props }) => {
  return (
    <S.InputContainer>
      <S.Label>{label}</S.Label>
      <S.Input
        {...props}
        {...register}
        placeholder={placeholder}
      />
      {errors && (
        <S.ErrorMessage>
          {errors?.message || errors || "Este campo é obrigatório"}
        </S.ErrorMessage>
      )}
    </S.InputContainer>
  )
}

export default Input

Input.propTypes = {
  props: PropTypes.object,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  label: PropTypes.string,
}