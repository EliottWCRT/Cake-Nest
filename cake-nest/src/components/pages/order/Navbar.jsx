import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../reusable-ui/Logo"
import { theme } from "../../../theme"
import { refreshPage } from "../../../utils/window"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={() => refreshPage()} />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;


  .logo-order-page {
    cursor: pointer;
  }
`
