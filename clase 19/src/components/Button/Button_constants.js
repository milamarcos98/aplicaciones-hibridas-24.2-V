import styled from "styled-components"

export const StyledButton = styled.button`
  /* background-color: ${props => props.disabled ? "#539458" : "#12ab1c"}; */
  /* width: ${props => {
    if(props.size === "big") return "150px";
    if(props.size === "small") return "50px";
    return '100px';
  }
  }; */
  background-color: lightblue;
  border: none;
  color: white;
  text-align: center;
  padding: 15px 30px;
  border-radius: 8px;

  &:hover{
    background-color: #ffffff;
    color: lightblue;
  }
`

export const AlertButton = styled(StyledButton)`
background-color: ${props => props.disabled ? "#8e5353" : "#ab1212"};;
&:hover{
    background-color: #810606;
    color: #ffffff;
  }
`

export const SuccessButton = styled(StyledButton)`
background-color: ${props => props.disabled ? "#658e53" : "#4fab12"};;
&:hover{
    background-color: #2b8106;
    color: #ffffff;
  }
`

export const PrimaryButton = styled(StyledButton)`
background-color: ${props => props.disabled ? "#537d8e" : "#168a9f"};;
&:hover{
    background-color: #068181;
    color: #ffffff;
  }
`
// mixins
export const Link = styled.a`
    ${StyledButton}
    text-decoration: none;
    color: lavander;
`