import { useState } from "react";

import Button from "./Button";

import buttons from "../assets/buttons";
import flipIcon from "../assets/img/setinha.png";
import openIcon from "../assets/img/play-outline-icon.svg";
import styled from "styled-components";

export default function Flashcard(props) {
    const {almost,
        answer,
        answeredCards,
        deckCards,
        disabled,
        id,
        error,
        open,
        openState,
        question,
        setAnsweredCards,
        setOpenState,
        status,
        zap}
    = props;

    const [flipped, setFlipped] = useState(false);
    
    function openCard() {
        if (!disabled) {
            setOpenState(!openState);
            deckCards.forEach(card => (card.id === id) ? (card.open = true) : (card.disabled = true));
        }
    }

    if (open) {
        return (
            <FlashcardOpenContainer data-identifier="flashcard" flipped={flipped}>
                <div data-identifier={`flashcard-${flipped ? "answer" : "question"}`}>
                    {flipped ? answer : question}
                </div>
                <div>
                    {flipped ?
                        <>
                            {buttons.map((button, index) =>
                                <Button
                                    answeredCards={answeredCards}
                                    deckCards={deckCards}
                                    id={id}
                                    key={index}
                                    setAnsweredCards={setAnsweredCards}
                                    setOpenState={setOpenState}
                                    text={button.text}
                                    type={button.type}
                                />
                            )}
                        </>
                        : <Icone alt="Virar" data-identifier="flashcard-turn-btn" onClick={() => setFlipped(true)} src={flipIcon} />
                    }
                </div>
            </FlashcardOpenContainer>
        );
    } else {
        return (
            <FlashcardContainer
                data-identifier="flashcard"
                disabled={disabled}
                onClick={openCard}
                status={status}
            >
                <span data-identifier="flashcard-index-item">Pergunta {id}</span>
                <Icone
                    alt={status ? ((status === "error") ? "Não lembrei" : ((status === "almost") ? "Quase não lembrei" : "Zap!")) : "Abrir"}
                    data-identifier={status ? "flashcard-status" : "flashcard-show-btn"}
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
    font-weight: 700;
    height: 65px;
    justify-content: space-between;
    margin: 20px 0px;
    padding: 10px 15px;
    width: 300px;
    ${({disabled}) => disabled ? "" : "cursor: pointer;"}
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
                return "color: var(--preto)";
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
    font-size: 18px;
    font-weight: 400;
    height: 140px;
    padding: 20px 15px 5px 15px;

    div {
        display: inherit;
        width: 100%;
    }
        
    div:nth-child(1) {
        justify-content: flex-start;
    }

    div:nth-child(2) {
        justify-content: ${({flipped}) => flipped ? "space-between" : "flex-end"};
    }

    img {
        height: 20px;
    }
`;

const Icone = styled.img`
    width: 28px;
`;
