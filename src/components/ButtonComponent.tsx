import React from 'react'
// import styles from './Button.module.css'
import styled from "styled-components"
type ButtonProps = {
  text: string;
}

const StyledButton = styled.button`
padding: 10px 20px;
background-color: blue;
border: none;
border-radius: 10px;
cursor: pointer;
color: white;
width: 100%;
`
const ButtonComponent: React.FC<ButtonProps> = ({ text }) => {
  return (
    <StyledButton>
      {text}
    </StyledButton>
  )
}

export default ButtonComponent