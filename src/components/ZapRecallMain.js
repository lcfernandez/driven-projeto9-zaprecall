import { useState } from "react";

import Footer from './Footer';
import Header from './Header';
import Deck from './Deck';

import deck from '../assets/deck';
import styled from "styled-components";

export default function ZapRecallMain() {
    const deckCards = deck.map(
        (card, index) => {
            return {
                id: index + 1,
                question: card.question,
                answer: card.answer,
                status: undefined
            };
        }
    );

    const [disabledButtons, setDisabledButtons] = useState(true);

    return (
        <Content>
            <Header />
            <Deck deckCards={deckCards} setDisabledButtons={setDisabledButtons} />
            <Footer disabledButtons={disabledButtons} totalCards={deckCards.length} />
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
