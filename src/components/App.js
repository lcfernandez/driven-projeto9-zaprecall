import { useState } from "react";

import GlobalStyle from "../assets/GlobalStyle";
import Main from './Main';
import Welcome from './Welcome';

import styled from "styled-components";

export default function App() {
    const [start, setStart] = useState(false);
    const [deck, setDeck] = useState(undefined);

    return (
        <AppContainer>
            {start ? <Main deck={deck} /> : <Welcome deck={deck} setDeck={setDeck} setStart={setStart} />}

            <GlobalStyle />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    background-color: var(--cor-fundo);
    height: 100vh;
    width: 100vw;
`
