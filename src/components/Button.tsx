import styled from "styled-components"

const ButtonContainer = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["green-500"]};
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
`

const Button =() => {
  return (
    <ButtonContainer>
      Enviar
    </ButtonContainer>
  )
}

export default Button