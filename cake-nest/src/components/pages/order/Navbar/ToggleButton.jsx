import React from "react"
import styled from "styled-components"
import { theme } from "../../../../theme/index"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function ToggleButton({
    isChecked,
    onToggle,
    labelIfChecked = "Désactiver le mode Admin",
    labelIfUnchecked = "Activer le mode Admin",
}) {
  const notify = () => toast.info('Vous êtes passé en mode administrateur !', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: "Bounce",
    });
  return (

    <ToggleButtonStyled>
      <input onClick={notify}
        type="checkbox"
        className="toggle"
        id="rounded"
        checked={isChecked}
        onChange={onToggle}
      />
      <label
        htmlFor="rounded"
        className="rounded"
        data-checked={labelIfChecked}
        data-unchecked={labelIfUnchecked}
      ></label>
    </ToggleButtonStyled>
  )
}


const ToggleButtonStyled = styled.div`

  display: flex;
  margin-right: 10px;
  input[type="checkbox"] {
    &.toggle {
      display: none;
    }

    &.toggle + label {
      display: inline-block;
      height: 40px;
      width: 200px;
      position: relative;
      font-size: ${theme.fonts.size.XXS};
      letter-spacing: 0.5px;
      border: 2px solid ${theme.colors.background_dark};
      padding: 0;
      margin: 0;
      cursor: pointer;
      box-sizing: border-box;
      transition: all 500ms ease;
    }

    // circle
    &.toggle + label:before {
      content: "";
      position: absolute;
      top: 3px;
      height: 30px;
      width: 30px;
      transition: all 500ms ease;
      z-index: 3;
    }

    // text in switch button 
    &.toggle + label:after {
      width: 150px;
      text-align: center;
      z-index: 2;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-overflow: ellipsis;
      overflow: hidden;
    }

    // container
    &.toggle + label.rounded {
      border-radius: 30px;
    }

    // circle
    &.toggle + label.rounded:before {
      border-radius: 50%;
    }

    &.toggle:not(:checked) + label {
      background-color: ${theme.colors.background_dark};
    }

    // text label not checked
    &.toggle:not(:checked) + label:after {
      content: attr(data-unchecked);
      right: 8px;
      left: auto;
      opacity: 1;
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};
    }

    // circle not checked
    &.toggle:not(:checked) + label:before {
      left: 3px;
      background-color: ${theme.colors.primary};
    }

    // container checked
    &.toggle:checked + label {
      text-align: left;
      border-color: ${theme.colors.primary};
    }

    // label  checked
    &.toggle:checked + label:after {
      content: attr(data-checked);
      left: 9px;
      right: auto;
      opacity: 1;
      color: ${theme.colors.dark};
      letter-spacing: 0px;
    }

    // circle checked
    &.toggle:checked + label:before {
      left: 162px;
      background-color: ${theme.colors.primary};
    }
  }
`