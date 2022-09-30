import { useState } from "react";

import Deck from './Deck';
import Footer from './Footer';
import Header from './Header';

import deck from '../assets/deck';
import styled from "styled-components";

export default function Recall() {
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

    const [answeredCards, setAnsweredCards] = useState(0);
    const [deckCards] = useState(initialDeckCards);

    return (
        <RecallContainer>
            <Header />
            <Deck
                answeredCards={answeredCards}
                deckCards={deckCards}
                setAnsweredCards={setAnsweredCards}
            />
            <Footer
                answeredCards={answeredCards}
                deckCards={deckCards}
            />
        </RecallContainer>
    );
}

const RecallContainer = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;
