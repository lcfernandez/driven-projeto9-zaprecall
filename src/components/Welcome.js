import { Link, Outlet } from "react-router-dom";

import ButtonStart from "./ButtonStart";

import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Welcome() {
    return (
        <WelcomeContainer>
            <Content>
                <img alt="Logo" src={logo} />
                <div>ZapRecall</div>
                <Link to="/recall"><ButtonStart /></Link>
            </Content>
            <Outlet />
        </WelcomeContainer>
    );
}

const WelcomeContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

const Content = styled.div`
    align-items: center;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    font-family: "Righteous", cursive;
    font-size: 36px;

    div {
        margin: 24px 0;
    }

    img {
        height: 161px;
    }
`;
