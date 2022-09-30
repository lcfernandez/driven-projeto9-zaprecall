import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <img alt="logo" src={logo} />
            ZapRecall
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    align-items: center;
    background-color: inherit;
    color: white;
    display: flex;
    font-family: "Righteous", cursive;
    font-size: 36px;
    height: 128px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;

    img {
        height: 60px;
        margin-right: 24px;
        width: 52px;
    }
`;
