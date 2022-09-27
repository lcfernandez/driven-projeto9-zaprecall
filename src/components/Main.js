import Flashcard from './Flashcard';
import styled from "styled-components";

export default function Main() {
    return (
        <Deck>
            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />
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
