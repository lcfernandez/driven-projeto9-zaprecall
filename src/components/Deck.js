import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Deck() {
    return (
        <DeckContainer>
            <Header>
                <img alt="logo" src={logo} />
                ZapRecall
            </Header>
            <Main>
                <Flashcard>
                    Flashcard 1
                </Flashcard>
                <Flashcard>
                    Flashcard 2
                </Flashcard>
                <Flashcard>
                    Flashcard 3
                </Flashcard>
                <Flashcard>
                    Flashcard 4
                </Flashcard>
                <Flashcard>
                    Flashcard 5
                </Flashcard>
                <Flashcard>
                    Flashcard 6
                </Flashcard>
                <Flashcard>
                    Flashcard 7
                </Flashcard>
                <Flashcard>
                    Flashcard 8
                </Flashcard>
            </Main>
        </DeckContainer>
    );
}

const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--cor-fundo);
    height: 100vh;
    width: 100vw;
`;

const Flashcard = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    cursor: pointer;
    font-family: 'Recursive', cursive;
`;

const Header = styled.div`
    margin: 24px 0;
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

    img {
        margin-right: 24px;
        width: 52px;
        height: 60px;
    }
`;

const Main = styled.div`
    margin: 128px auto 106px auto;
    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
