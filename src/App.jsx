import { AuthProvider } from "./contexts/AuthContext"
import { GlobalStyles } from "./styles/global-styles"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import { ThemeProvider, useTheme } from "./contexts/ThemeContext"
import AppRoutes from "./routes"

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
      <AuthProvider>
        <InnerApp />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
