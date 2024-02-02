import React from 'react';
import styled from "styled-components";
import { theme } from "../../theme/index";
import { GiCupcake } from "react-icons/gi";
import TextInput from "./TextInput";
import { FaCamera } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { fakeMenu2 } from "../../fakeData/fakeMenu.js";


function TextInputAdmin() {
  return (
    <TextInputStyled>
        <div className='form-inputs-container'>
          <TextInput className="input" Icon={<GiCupcake className="icon" />} placeholder="Nom du produit" type='text'/>
          <TextInput className="input" Icon={<FaCamera className="icon" />} type='url' placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"/>
          <TextInput className="input" Icon={<FaEuroSign className="icon" />} type='number' placeholder="Prix" step={0.01} min={0} max={100} />
        </div>
    </TextInputStyled>
  )
}
const TextInputStyled = styled.div `
  display: flex;
  align-items: flex-start;
  height: fit-content;
  margin: ${theme.spacing.lg} auto 0 ${theme.spacing.lg};
  gap: -10px; 


  .form-inputs-container {
    position: relative;
    width: clamp(450px, 60%, 750px);
    margin-left: ${theme.spacing.md};

    .input {
      margin-top: 0;
      color: ${theme.colors.greyLight};
      background-color: ${theme.colors.greyLight}
    }
  }
`




export default TextInputAdminx