import styled from "styled-components";

export default function Footer({almost, answeredCards, deckCards, error, zap}) {
    return (
        <FooterContainer>
            <div data-identifier="flashcard-counter">
                {answeredCards}/{deckCards.length} CONCLUÍDOS
            </div>
            <div>
                {deckCards.map(
                    card => card.status ?
                        <Icone
                            alt={card.status === "error" ? "Não lembrei" : ((card.status === "almost") ? "Quase não lembrei" : "Zap!")}
                            data-identifier="flashcard-status"
                            src={
                                (card.status === "error") ? error : ((card.status === "almost") ? almost : zap)
                            }
                        />
                    : ""
                )}
            </div>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    align-items: center;
    background-color: white;
    bottom: 0;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    color: black;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    height: 80px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1;
`;

const Icone = styled.img`
    margin: 4px;
    width: 22px;
`;
