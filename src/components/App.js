import Main from './Main';
import Footer from './Footer';
import GlobalStyle from "./GlobalStyle";
import Header from './Header';
import styled from "styled-components";

export default function App() {
    return (
        <Content>
            <Header />
            <Main />
            <Footer />
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
