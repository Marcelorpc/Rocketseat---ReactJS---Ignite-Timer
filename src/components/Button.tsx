import styled from "styled-components";

type Props = {
  backgroundColor: "primary" | "danger";
}

const ButtonContainer = styled.button<{backgroundColor: "primary" | "danger";}>`
  background-color: ${props => {
    if(props.backgroundColor === "primary") {
      return "#FFFF00";
    }
    if(props.backgroundColor === "danger") {
      return "#FF0000";	
    }
  }};
  width: 200px;
`

const Button =(props: Props) => {
  return (
    <ButtonContainer backgroundColor={props.backgroundColor}>
      Enviar
    </ButtonContainer>
  )
}

export default Button