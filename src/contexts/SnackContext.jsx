import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Snack from "../components/Snack";

const SnackContext = createContext({
  showSnack: () => {},
});

export const SnackProvider = ({ children }) => {
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    variant: "info",
    actionLabel: "",
    onAction: null,
  });
  const closeTimerRef = useRef(null);

  const closeSnack = useCallback(() => {
    setSnack((prev) => ({
      ...prev,
      open: false,
    }));
  }, []);

  const showSnack = useCallback(
    ({
      message,
      variant = "info",
      actionLabel = "",
      onAction = null,
      duration = 3000,
    }) => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }

      setSnack({
        open: true,
        message,
        variant,
        actionLabel,
        onAction,
      });

      closeTimerRef.current = setTimeout(() => {
        closeSnack();
      }, duration);
    },
    [closeSnack],
  );

  useEffect(
    () => () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    },
    [],
  );

  return (
    <SnackContext.Provider value={{ snack, showSnack }}>
      {children}
      <Snack
        open={snack.open}
        message={snack.message}
        variant={snack.variant}
        actionLabel={snack.actionLabel}
        onAction={snack.onAction}
        onClose={closeSnack}
      />
    </SnackContext.Provider>
  );
};

export const useSnack = () => useContext(SnackContext);
