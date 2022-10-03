import ZapGoalResult from "./ZapGoalResult";

import party from "../assets/img/party.png";
import sad from "../assets/img/sad.png";
import styled from "styled-components";

export default function Footer({almost, answeredCards, deckCards, error, goal, zap}) {
    return (
        <FooterContainer>
            <div>
                {answeredCards.length === deckCards.length ?
                    <ZapGoalResult 
                        phrase={answeredCards.filter(card => card.status === "zap").length >= goal ? "Parabéns" : "Putz"}
                        src={answeredCards.filter(card => card.status === "zap").length >= goal ? party : sad}
                    />
                : ""}
            </div>
            <div data-identifier="flashcard-counter">
                {answeredCards.length}/{deckCards.length} CONCLUÍDOS
            </div>
            <div>
                {answeredCards.map(
                    card => card.status ?
                        <img
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
    color: var(--preto);
    display: flex;
    flex-direction: column;
    font-size: 18px;
    height: 110px;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1;

    div {
        height: 22px;
        margin: 3px 0;
    }

    img {
        margin: 0 3px;
    }
`;
