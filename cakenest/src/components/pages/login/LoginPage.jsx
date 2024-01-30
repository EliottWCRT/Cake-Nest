import LoginForm from "./LoginForm";
import styled from "styled-components";
import { theme } from  "../../../../public/index.js";
import tarts from "../../../assets/tarts.jpg"

export default function LoginPage() {
    return (
        <LoginPageStyled>
            <LoginForm />
        </LoginPageStyled>
    );
}
const LoginPageStyled = styled.form `
    background-image: url(${tarts});
    background-position: center center;
    height: 100vh;

    * {
        margin: 0px;
        padding: 0px;
    }
    
`

