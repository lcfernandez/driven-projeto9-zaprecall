import { useState } from "react";

import Deck from './Deck';
import Footer from './Footer';
import Header from './Header';

import deck from '../assets/deck';
import styled from "styled-components";

export default function ZapRecallMain() {
    const initialDeckCards = deck.map(
        (card, index) => {
            return {
                answer: card.answer,
                disabled: false,
                id: index + 1,
                open: false,
                question: card.question,
                status: undefined
            };
        }
    );

    const [deckCards] = useState(initialDeckCards);
    const [disabledButtons, setDisabledButtons] = useState(true);

    return (
        <MainContainer>
            <Header />
            <Deck
                deckCards={deckCards}
                setDisabledButtons={setDisabledButtons}
            />
            <Footer
                deckCards={deckCards}
                disabledButtons={disabledButtons}
                setDisabledButtons={setDisabledButtons}
            />
        </MainContainer>
    );
}

const MainContainer = styled.div`
    background-color: var(--cor-fundo);
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;
