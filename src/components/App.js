import { useState } from "react";

import GlobalStyle from "../assets/GlobalStyle";
import Main from './Main';
import Welcome from './Welcome';

import styled from "styled-components";

export default function App() {
    const [deck, setDeck] = useState(undefined);
    const [goal, setGoal] = useState(undefined);
    const [start, setStart] = useState(false);

    return (
        <AppContainer>
            {start ? <Main deck={deck} goal={goal} /> :
                <Welcome
                    deck={deck}
                    goal={goal}
                    setDeck={setDeck}
                    setGoal={setGoal}
                    setStart={setStart}
                />
            }

            <GlobalStyle />
        </AppContainer>
    );
}

const AppContainer = styled.div`
    background-color: var(--cor-fundo);
    height: 100vh;
    width: 100vw;
`
