import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Navbar from "./Navbar";



export default function OrderPage(props) {
    const {username} = useParams();
    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar username={username} />
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
        text-align: center;
        background-color: white;
        border-radius: 15px;
        margin: auto; 
        padding: auto;

    }
`

