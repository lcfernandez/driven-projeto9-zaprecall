import { useState } from "react";

import GlobalStyle from "../assets/GlobalStyle";
import Main from './Main';
import Welcome from './Welcome';

import styled from "styled-components";

export default function App() {
    const [start, setStart] = useState(false);

    return (
        <AppContainer>
            {start ? <Main /> : <Welcome setStart={setStart} />};

            <GlobalStyle />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    background-color: var(--cor-fundo);
`
