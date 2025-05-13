import React from 'react'
import * as S from "./styles"
import PropTypes from 'prop-types'

const Button = ({ variant, children }) => {
  return (
    <S.Button variant={variant}>{children}</S.Button>
  )
}

export default Button

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
    children: PropTypes.node.isRequired,
}