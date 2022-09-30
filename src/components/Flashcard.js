import { useState } from "react";

import almost from "../assets/img/icone_quase.png";
import error from "../assets/img/icone_erro.png";
import flipIcon from "../assets/img/setinha.png";
import openIcon from "../assets/img/play-outline-icon.svg";
import styled from "styled-components";
import zap from "../assets/img/icone_certo.png"; 

export default function Flashcard({answer, deckCards, disabled, number, open, openState, question, setDisabledButtons, setOpenState, status}) {
    const [flipped, setFlipped] = useState(false);
    
    function flipCard() {
        setDisabledButtons(false);
        setFlipped(true);
    }

    function openCard() {
        if (!disabled) {
            setOpenState(!openState);
            deckCards.forEach(card => (card.id === number) ? (card.open = true) : (card.disabled = true));
        }
    }

    if (open) {
        return (
            <FlashcardOpenContainer data-identifier="flashcard">
                <div data-identifier={`flashcard-${flipped ? "answer" : "question"}`}>
                    {flipped ? answer : question}
                </div>
                <div>
                    {flipped ? "" : <Icone alt="Virar" data-identifier="flashcard-turn-btn" onClick={flipCard} src={flipIcon} />}
                </div>
            </FlashcardOpenContainer>
        );
    } else {
        return (
            <FlashcardContainer data-identifier="flashcard" status={status}>
                <span data-identifier="flashcard-index-item">Flashcard {number}</span>
                <Icone
                    alt={status ? ((status === "error") ? "Não lembrei" : ((status === "almost") ? "Quase não lembrei" : "Zap!")) : "Abrir"}
                    data-identifier={status ? "flashcard-status" : "flashcard-show-btn"}
                    disabled={disabled}
                    onClick={openCard}
                    src={status ? ((status === "error") ? error : ((status === "almost") ? almost : zap)) : openIcon}
                />
            </FlashcardContainer>
        );
    }
};

const FlashcardContainer = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    font-family: 'Recursive', cursive;
    height: 65px;
    justify-content: space-between;
    margin: 20px 0px;
    padding: 10px 15px;
    width: 300px;
    ${({status}) => {
        switch (status) {
            case "error":
                return `color: var(--cor-nao-lembrei);
                        text-decoration: line-through;`;
            case "almost":
                return `color: var(--cor-quase-nao-lembrei);
                        text-decoration: line-through;`;
            case "zap":
                return `color: var(--cor-zap);
                        text-decoration: line-through;`;
            default:
                return "color: black";
        }
    }}

    img {
        height: 28px;
        padding: 3px;
    }
`;

const FlashcardOpenContainer = styled(FlashcardContainer)`
    background-color: var(--cor-fundo-card);
    display: flex;
    flex-direction: column;
    min-height: 130px;
    padding: 20px 15px 5px 15px;

    div {
        display: inherit;
        width: 100%;
    }
        
    div:nth-child(1) {
        justify-content: flex-start;
        
    }

    div:nth-child(2) {
        justify-content: flex-end;
    }

    img {
        height: 20px;
    }
`;

const Icone = styled.img`
    color: var(--preto);
    width: 28px;
    ${({disabled}) => disabled ? "" : "cursor: pointer;"}
`;
