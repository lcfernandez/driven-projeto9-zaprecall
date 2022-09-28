import Flashcard from './Flashcard';

import styled from "styled-components";

export default function Main({deckCards}) {
    return (
        <DeckContainer>
            {deckCards.map(
                (card) => 
                    <Flashcard
                        answer={card.answer}
                        key={card.id}
                        number={card.id}
                        question={card.question}
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