import Flashcard from './Flashcard';
import styled from "styled-components";

export default function Main(props) {
    return (
        <Deck>
            {props.deckCards.map(
                (card) => 
                    <Flashcard
                        answer={card.answer}
                        key={card.id}
                        question={card.question}
                        number={card.id}
                        status="open"
                        face="answer"
                    />
            )}
        </Deck>
    );
}

const Deck = styled.div`
    height: calc(100% - 244px);
    margin: 128px auto 0 auto;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
