import React from 'react'
import styled from "styled-components";
import { theme } from "../../../theme";
import Logo from '../../reusable-ui/Logo';
import Profile from './Profile';

function Navbar({ username }) {
  return (
    <NavbarStyled>

        <Logo  />
        <div className='profilStyle'>
          <Profile username={username} />
        </div>
    
    </NavbarStyled>

  )
}

export default Navbar
const NavbarStyled = styled.div `
  box-shadow: 0px 10px 50px 0px rgba(41,41,41,1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;

  .profilStyle {
    font-family: "Open Sans", sans-serif;
  }


`
