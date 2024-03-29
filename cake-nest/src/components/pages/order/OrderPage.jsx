import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage(props) {
    const { username } = useParams();

    return (
        <OrderPageStyled>
            <div className="container">
               <Navbar username={username}/>
               <Main/>
            </div>
        </OrderPageStyled>
    );
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;

    }
`;