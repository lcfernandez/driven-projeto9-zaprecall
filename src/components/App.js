import deckCards from '../assets/deck';
import Footer from './Footer';
import GlobalStyle from "../assets/GlobalStyle";
import Header from './Header';
import Main from './Main';
import styled from "styled-components";

export default function App() {
    return (
        <Content>
            <Header />
            <Main deckCards={deckCards} />
            <Footer totalCards={deckCards.length}/>
            <GlobalStyle />
        </Content>
    );
}

const Content = styled.div`
    background-color: var(--cor-fundo);
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;
