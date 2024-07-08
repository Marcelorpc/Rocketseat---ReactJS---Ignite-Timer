import Button from "./components/Button"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Button backgroundColor="primary" />
      <Button backgroundColor="danger" />

      <GlobalStyle />
    </>
  )
}

export default App