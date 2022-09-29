import { useState } from "react";

import Flashcard from './Flashcard';

import styled from "styled-components";

export default function Main({deckCards, setDisabledButtons}) {
    const [openState, setOpenState] = useState(false);

    return (
        <DeckContainer>
            {deckCards.map(
                card => 
                    <Flashcard
                        answer={card.answer}
                        deckCards={deckCards}
                        disabled={card.disabled}
                        key={card.id}
                        number={card.id}
                        open={card.open}
                        openState={openState}
                        question={card.question}
                        setDisabledButtons={setDisabledButtons}
                        setOpenState={setOpenState}
                        status={card.status}
                    />
            )}
        </DeckContainer>
    );
}

const DeckContainer = styled.div`
    height: calc(100% - 240px);
    margin: 128px auto 0 auto;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
