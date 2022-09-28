import Flashcard from './Flashcard';

import styled from "styled-components";

export default function Main({deckCards, setDisabledButtons, setOpen}) {
    return (
        <DeckContainer>
            {deckCards.map(
                (card) => 
                    <Flashcard
                        answer={card.answer}
                        deckCards={deckCards}
                        disabled={card.status ? true : false}
                        key={card.id}
                        number={card.id}
                        open={card.open}
                        question={card.question}
                        setDisabledButtons={setDisabledButtons}
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
