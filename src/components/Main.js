import { useState } from "react";

import Deck from './Deck';
import Footer from './Footer';
import Header from './Header';

import almost from "../assets/img/icone_quase.png";
import decks from '../assets/decks';
import error from "../assets/img/icone_erro.png";
import styled from "styled-components";
import zap from "../assets/img/icone_certo.png"; 

export default function Main({deck}) {
    const initialDeckCards = decks[deck].cards.map(
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
    
    const [answeredCards, setAnsweredCards] = useState([]);
    const [deckCards] = useState(initialDeckCards);

    return (
        <MainContainer>
            <Header />
            <Deck
                almost={almost}
                answeredCards={answeredCards}
                deckCards={deckCards}
                error={error}
                setAnsweredCards={setAnsweredCards}
                zap={zap}
            />
            <Footer
                almost={almost}
                answeredCards={answeredCards}
                deckCards={deckCards}
                error={error}
                zap={zap}
            />
        </MainContainer>
    );
}

const MainContainer = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
`;
