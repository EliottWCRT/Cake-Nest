import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../theme/index.js' ;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.$width || '100%'};
  height: 50px;
  margin-block: 0.833em;
  padding-block: 1.333em;
  border: none;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.primary};
  font-size: ${props => props.$fontSize || theme.fonts.size.P3};
  font-weight: 700;
  color: ${theme.colors.white};

  &:hover {
    cursor: pointer;
  }

  .btn-icon {
    position: relative;
    top: 0.1em;
    left: 0.5em;
  }
`;

function Button({ label, icon, fontSize, width }) {
  return (
    <ButtonStyled $fontSize={fontSize} $width={width}>
      {label} {icon && icon}
    </ButtonStyled>
  );
}

export default Button;