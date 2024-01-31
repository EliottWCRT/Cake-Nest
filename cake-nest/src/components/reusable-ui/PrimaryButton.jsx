
import styled from "styled-components"
import { theme } from "../../theme"

export default function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; 
  white-space: nowrap; 
  text-decoration: none; 
  line-height: 1;

  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 200ms ease-out;
  }
  :active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  &.is-disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }

  &.with-focus {
    border: 1px solid white;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    :hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
`
=======
import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
    return (
        <PrimaryButtonStyled className="buttonContainer">
            <span>{label}</span>
            {Icon && Icon}
        </PrimaryButtonStyled>
    );
}

const PrimaryButtonStyled = styled.button`
    background: #63a5aa;
    border: 1px solid #63a5aa;
    border-radius: 5px;
    color: white;
    font-size: 18px;
    font-weight: 800;
    padding: 16px 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    line-height: 1;

    &:hover:not(:disabled) {
        background: white;
        color: #63a5aa;
        border: 1px solid #63a5aa;
        transition: all 0.3s ease-in-out;
    }
    &:active {
        color: white;
        background: #63a5aa;
        border: 1px solid #63a5aa;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

