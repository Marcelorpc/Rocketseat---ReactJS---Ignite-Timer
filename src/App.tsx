import { ThemeProvider } from "styled-components"
import Button from "./components/Button"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App