import React from 'react'
import styled from "styled-components"

function TextInputAdmin() {
  return (
    <TextInputStyled>
        <input type='text'/>
        <input type='image' />
        <input type='number' step={0.01} min={0} max={100} />
    </TextInputStyled>
  )
}
const TextInputStyled = styled.div `
    color: grey;
`




export default TextInputAdmin