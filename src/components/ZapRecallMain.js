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
                id: index + 1,
                open: false,
                question: card.question,
                status: undefined
            };
        }
    );

    const [disabledButtons, setDisabledButtons] = useState(true);
    const [deckCards, setDeckCards] = useState(initialDeckCards);
    const [open, setOpen] = useState(false);

    return (
        <Content>
            <Header />
            <Deck deckCards={deckCards} open={open} setDisabledButtons={setDisabledButtons} setOpen={setOpen} />
            <Footer deckCards={deckCards} disabledButtons={disabledButtons} setDeckCards={setDeckCards} setOpen={setOpen} />
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
