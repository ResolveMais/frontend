import { AuthProvider } from "./contexts/AuthContext"
import { GlobalStyles } from "./styles/global-styles"
import AppRoutes from "./routes"

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
