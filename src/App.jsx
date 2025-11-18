import { AuthProvider } from "./contexts/AuthContext"
import { GlobalStyles } from "./styles/global-styles"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"
import AppRoutes from "./routes"
import { SnackProvider } from "./contexts/SnackContext"

const InnerApp = () => {
  const { theme } = useTheme()

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </StyledThemeProvider>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <SnackProvider>
        <AuthProvider>
          <InnerApp />
        </AuthProvider>
      </SnackProvider>
    </ThemeProvider>
  )
}

export default App
