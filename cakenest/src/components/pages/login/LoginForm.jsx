import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from  "../../../../public/index.js";

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        navigate(`/order/${inputValue}`);
    };

    const handlechange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <LoginFormStyled>
            <form onSubmit={handleSubmit}>
                <h1>Bienvenue chez nous !</h1>
                <hr />
                <h2>Connectez-vous</h2>
                <input value={inputValue} onChange={handlechange} placeholder={"Entrez votre prénom"} required />

                <button>Mon espace</button>
            </form>
        </LoginFormStyled>
    );
}
const LoginFormStyled =  styled.form `
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    font-family: "Pacifico", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    

    h1 {
        margin: 20px 10px 10px;
        color: white;
    }
    hr { 
        border: 1.5px solid ${theme.colors.loginLine}
        margin-bottom ;
    }
    h2 {
        color: white;
    }
`