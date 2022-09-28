import { useState } from "react";

import almost from "../assets/img/icone_quase.png";
import error from "../assets/img/icone_erro.png";
import flipIcon from "../assets/img/setinha.png";
import openIcon from "../assets/img/play-outline-icon.svg";
import styled from "styled-components";
import zap from "../assets/img/icone_certo.png"; 

export default function Flashcard({answer, deckCards, disabled, number, open, question, setOpen, setDisabledButtons, status}) {
    const [flipped, setFlipped] = useState(false);
    
    function flipCard() {
        setDisabledButtons(false);
        setFlipped(true)
    }

    function openCard() {
        if (!disabled) {
            setOpen(true);

            deckCards.forEach(card => card.id === number ? card.open = true : "");
        }
    }

    if (open) {
        return (
            <FlashcardOpenContainer>
                <div>
                    {flipped ? answer : question}
                </div>
                <div>
                    {flipped ? "" : <Icone alt="Virar" onClick={flipCard} src={flipIcon} />}
                </div>
            </FlashcardOpenContainer>
        );
    } else {
        return (
            <FlashcardContainer status={status}>
                Flashcard {number}
                <Icone alt="Abrir"
                    disabled={disabled}
                    onClick={openCard}
                    src={status ? (status === "error" ? error : (status === "almost" ? almost : zap)) : openIcon}
                />
            </FlashcardContainer>
        );
    }
};

const FlashcardContainer = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 5px;
    display: flex;
    font-family: 'Recursive', cursive;
    height: 50px;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 10px 10px;
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
        }
    }
`;

const FlashcardOpenContainer = styled(FlashcardContainer)`
    background-color: var(--cor-fundo-card);
    display: flex;
    flex-direction: column;
    min-height: 130px;
    padding: 20px 10px;
        
    div:nth-child(1) {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }

    div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
`;

const Icone = styled.img`
    color: var(--preto);
    cursor: ${({disabled}) => disabled ? "default;" : "pointer;"}
    height: 23px;
    width: 23px;
`;
