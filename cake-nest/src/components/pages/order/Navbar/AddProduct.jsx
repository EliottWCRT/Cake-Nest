import React from 'react'
import styled from "styled-components"
import TextInputAdmin from '../../../reusable-ui/TextInputAdmin'
import ButtonAdmin from '../../../reusable-ui/ButtonAdmin'

function AddProduct() {
  return (
    <AddStyled>
        <TextInputAdmin />
        <ButtonAdmin />
    </AddStyled>
  )
}
const AddStyled = styled.div``




export default AddProduct