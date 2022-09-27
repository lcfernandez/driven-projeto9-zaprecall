import styled from "styled-components";

export default function Flashcard() {
    return (
        <FlashcardContainer>
            Flashcard
        </FlashcardContainer>
    );
}

const FlashcardContainer = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    display: flex;
    font-family: 'Recursive', cursive;
    height: 50px;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 10px 10px;
    width: 300px;    
`;
