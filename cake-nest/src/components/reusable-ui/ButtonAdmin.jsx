import React from 'react'
import styled from "styled-components"
import { theme } from "../../theme/index"


function ButtonAdmin() {
  return (
    <ButtonStyled>
        <span>Ajouter un nouveau produit</span>
    </ButtonStyled>
  )
}
const ButtonStyled = styled.div `
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 1500px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.success};
    &:hover {
      color: ${theme.colors.success};
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.success};
      transition: all 200ms ease-out;
    }
  :active {
    background-color: ${theme.colors.white};
    color: ${theme.colors.success};
  }


`

export default ButtonAdmin