import React from 'react'
import styled from "styled-components"


function ButtonAdmin() {
  return (
    <ButtonStyled>
        <button type="button">Ajouter un nouveau produit</button>
    </ButtonStyled>
  )
}
const ButtonStyled = styled.div `
    color: green;
    border-radius: 20px;

`

export default ButtonAdmin