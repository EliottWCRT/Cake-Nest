import React from 'react'
import styled from "styled-components"

function TextInputAdmin() {
  return (
    <TextInputStyled>
        <input type='text'/>
        <input type='image' />
        <input type='number' />
    </TextInputStyled>
  )
}
const TextInputStyled = styled.div `
    color: grey;
`




export default TextInputAdmin