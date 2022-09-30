import Button from "./Button";

import styled from "styled-components";

export default function Footer({deckCards, disabledButtons, setDisabledButtons}) {
    return (
        <FooterContainer>
            <Buttons>
                <Button
                    deckCards={deckCards}
                    disabledButtons={disabledButtons}
                    setDisabledButtons={setDisabledButtons}
                    text="Não lembrei"
                    type="error"
                />
                <Button
                    deckCards={deckCards}
                    disabledButtons={disabledButtons}
                    setDisabledButtons={setDisabledButtons}
                    text="Quase não lembrei"
                    type="almost"
                />
                <Button
                    deckCards={deckCards}
                    disabledButtons={disabledButtons}
                    setDisabledButtons={setDisabledButtons}
                    text="Zap!"
                    type="zap"
                />
            </Buttons>

            <span data-identifier="flashcard-counter">
                {deckCards.filter(card => card.status ? true : false).length}/{deckCards.length} CONCLUÍDOS
            </span>
        </FooterContainer>
    );
}

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

const FooterContainer = styled.div`
    background-color: white;
    bottom: 0;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    color: black;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 20px;
    left: 0;
    padding: 14px 10px 24px 10px;
    position: fixed;
    right: 0;
    text-align: center;
    width: 100%;
    z-index: 1;
`;
