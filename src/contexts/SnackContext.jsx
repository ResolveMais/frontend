import { createContext, useContext, useState, useCallback } from "react";
import Snack from "../components/Snack";

const SnackContext = createContext({
    showSnack: ({ variant, message }) => { },
});

export const SnackProvider = ({ children }) => {
    const [snack, setSnack] = useState({
        open: false,
        message: "",
        variant: "info",
    });

    const showSnack = useCallback(({ message, variant = "info" }) => {
        setSnack({ open: true, message, variant });

        setTimeout(() => {
            setSnack((prev) => ({ ...prev, open: false }));
        }, 3000);
    }, []);

    return (
        <SnackContext.Provider value={{ snack, showSnack }}>
            {children}
            <Snack open={snack.open} message={snack.message} variant={snack.variant} />
        </SnackContext.Provider>
    );
}

export const useSnack = () => useContext(SnackContext);