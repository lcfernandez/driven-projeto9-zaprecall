import { useState } from "react";

import Flashcard from './Flashcard';

import styled from "styled-components";

export default function Main({deckCards, setDisabledButtons, setOpen}) {
    const [disabledCards, setDisabledCards] = useState([]);

    return (
        <DeckContainer>
            {deckCards.map(
                (card) => 
                    <Flashcard
                        answer={card.answer}
                        deckCards={deckCards}
                        disabled={disabledCards.includes(card.id) ? true : false}
                        key={card.id}
                        number={card.id}
                        open={card.open}
                        question={card.question}
                        setDisabledButtons={setDisabledButtons}
                        setDisabledCards={setDisabledCards}
                        setOpen={setOpen}
                        status={card.status}
                    />
            )}
        </DeckContainer>
    );
}

const DeckContainer = styled.div`
    height: calc(100% - 244px);
    margin: 128px auto 0 auto;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
