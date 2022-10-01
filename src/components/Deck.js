import { useState } from "react";

import Flashcard from './Flashcard';

import styled from "styled-components";

export default function Main({almost, answeredCards, deckCards, error, setAnsweredCards, zap}) {
    const [openState, setOpenState] = useState(false);

    return (
        <DeckContainer>
            {deckCards.map(
                card => 
                    <Flashcard
                        almost={almost}
                        answer={card.answer}
                        answeredCards={answeredCards}
                        deckCards={deckCards}
                        disabled={card.disabled}
                        error={error}
                        key={card.id}
                        number={card.id}
                        open={card.open}
                        openState={openState}
                        question={card.question}
                        setAnsweredCards={setAnsweredCards}
                        setOpenState={setOpenState}
                        status={card.status}
                        zap={zap}
                    />
            )}
        </DeckContainer>
    );
}

const DeckContainer = styled.div`
    height: calc(100% - 208px);
    margin: 128px auto 80px auto;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
