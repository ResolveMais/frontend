import * as S from "./styles"
import PropTypes from 'prop-types'

/**
 * @typedef {('primary'|'secondary'|'link'|'transparent'|'disabled')} ButtonVariant
 * @param {Object} props - The component props.
 * @param {Object} props.style - Style object
 * @param {string} props.children - Text to be displayed inside the button
 * @param {string} props.redirect - Path to redirect when the button is clicked
 * @param {ButtonVariant} props.variant - Button variant
 * @param {string} props.type - Button type
 * @param {(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void} props.onClick - Function to be executed when the button is clicked
 * @param {boolean} props.disabled - If the button is disabled
 * @param {boolean} props.full - If the button should be full width
 * @returns {JSX.Element}
 */
const Button = ({ type, variant, children, onClick, redirect, full, disabled }) => {
  return redirect ? (
    <S.LinkButton to={redirect} $variant={variant} onClick={onClick} $full={full} disabled={disabled}>
      {children}
    </S.LinkButton>
  ) : (
    <S.Button type={type} $variant={disabled ? "disabled" : variant} onClick={onClick} $full={full} disabled={disabled}>{children}</S.Button>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'transparent', 'link', 'disabled', 'green-border']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  redirect: PropTypes.string,
  full: PropTypes.bool,
  disabled: PropTypes.bool,
}