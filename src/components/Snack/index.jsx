import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import * as S from "./styles";

const Snack = ({ open, message, variant, actionLabel, onAction, onClose }) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!open) return;

    // Inicia animação de saída um pouco antes do remover
    const timer = setTimeout(() => {
      setClosing(true);

      setTimeout(() => {
        setClosing(false);
      }, 300);
    }, 2600);

    return () => clearTimeout(timer);
  }, [open]);

  if (!open) return null;

  const handleAction = () => {
    if (typeof onAction === "function") onAction();
    if (typeof onClose === "function") onClose();
  };

  return (
    <S.SnackWrapper type={variant} closing={closing}>
      <S.SnackMessage>{message}</S.SnackMessage>
      {actionLabel ? (
        <S.SnackActionButton type="button" onClick={handleAction}>
          {actionLabel}
        </S.SnackActionButton>
      ) : null}
    </S.SnackWrapper>
  );
};

export default Snack;

Snack.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  variant: PropTypes.string,
  actionLabel: PropTypes.string,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
};
