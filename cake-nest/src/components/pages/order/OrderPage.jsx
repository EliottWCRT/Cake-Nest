import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme"


export default function OrderPage(props) {
    const {username} = useParams();

    return (
        <OrderPageStyled>
            <div className="container">
                <h1>Bonjour {username}</h1>
                <Link to={"/"}>
                    <button>Se déconnecter</button>
                </Link>
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div `
    background-color: ${theme.colors.primary};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 15px;
    }
    `

