import Button from "./Button";

import styled from "styled-components";

export default function Footer({deckCards, disabledButtons, setDeckCards, setOpen, setStatus}) {
    return (
        <FooterContainer>
            <Buttons>
                <Button deckCards={deckCards} disabled={disabledButtons} setDeckCards={setDeckCards} setOpen={setOpen} setStatus={setStatus}
                    text="Não lembrei" type="error"
                />
                <Button deckCards={deckCards} disabled={disabledButtons} setDeckCards={setDeckCards} setOpen={setOpen} setStatus={setStatus}
                    text="Quase não lembrei" type="almost"
                />
                <Button deckCards={deckCards} disabled={disabledButtons} setDeckCards={setDeckCards} setOpen={setOpen} setStatus={setStatus}
                    text="Zap!" type="zap"
                />
            </Buttons>

            {deckCards.filter(card => card.status ? true : false).length}/{deckCards.length} CONCLUÍDOS
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
