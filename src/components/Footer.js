import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";
import styled from "styled-components";

export default function Footer({almost, answeredCards, deckCards, error, goal, zap}) {
    return (
        <FooterContainer>
            <div>
                {answeredCards.length === deckCards.length ?
                    <img alt="" src={
                        (answeredCards.filter(card => card.status === "zap").length >= goal ? party : sad)
                    } />
                : ""}
            </div>
            <div data-identifier="flashcard-counter">
                {answeredCards.length}/{deckCards.length} CONCLUÍDOS
            </div>
            <div>
                {answeredCards.map(
                    card => card.status ?
                        <Icone
                            alt={card.status === "error" ? "Não lembrei" : ((card.status === "almost") ? "Quase não lembrei" : "Zap!")}
                            key={card.id}
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
    height: 126px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1;

    div {
        height: 22px;
        margin: 3px 0;
    }
`;

const Icone = styled.img`
    margin: 0 2px;
`;
