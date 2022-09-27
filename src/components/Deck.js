import styled from "styled-components";

export default function Deck() {
    return (
        <DeckContainer>
            <Header></Header>
            <Main></Main>
        </DeckContainer>
    );
}

const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);

    img {
        width: 52px;
        height: 60px;
    }
`;

const Main = styled.div`
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
