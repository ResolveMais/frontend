import React from 'react'
import * as S from "./styles"
import PropTypes from 'prop-types'

const Input = ({ placeholder, label, ...props }) => {
  return (
    <S.InputContainer>
        <S.Label>{label}</S.Label>
        <S.Input
            {...props}
            placeholder={placeholder}
        />
    </S.InputContainer>
  )
}

export default Input

Input.propTypes = {
    props: PropTypes.object,
    placeholder: PropTypes.string,
    label: PropTypes.string,
}