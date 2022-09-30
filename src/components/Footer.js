import styled from "styled-components";

export default function Footer({answeredCards, deckCards}) {
    return (
        <FooterContainer>
            <span data-identifier="flashcard-counter">
                {answeredCards}/{deckCards.length} CONCLUÍDOS
            </span>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    background-color: white;
    bottom: 0;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    color: black;
    display: flex;
    font-size: 18px;
    height: 70px;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1;

    span {
        margin: auto;
    }
`;
