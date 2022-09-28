import { useState } from "react";

import flipIcon from "../assets/img/setinha.png";
import openIcon from "../assets/img/play-outline-icon.svg";
import styled from "styled-components";

export default function Flashcard({answer, deckCards, disabled, number, question, setDisabledButtons, setDisabledFlashcards, status}) {
    const [flipped, setFlipped] = useState(false);
    const [open, setOpen] = useState(false);

    function flipCard() {
        setDisabledButtons(false);
        setFlipped(true)
    }

    function openCard() {
        if (!disabled) {
            const array = deckCards.map(card => card.id).filter(id => id !== number);
            setDisabledFlashcards(array);
            setOpen(true);
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
            <FlashcardContainer disabled={disabled}>
                Flashcard {number}
                <Icone alt="Abrir" onClick={openCard} src={openIcon} />
            </FlashcardContainer>
        );
    }
};

const FlashcardContainer = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 5px;
    color: black;
    display: flex;
    font-family: 'Recursive', cursive;
    height: 50px;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 10px 10px;
    width: 300px;
`;

const FlashcardOpenContainer = styled(FlashcardContainer)`
    background-color: var(--cor-fundo-card);
    cursor: default;
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
    height: 23px;
    width: 23px;

    ${({disabled}) => disabled ? "" : "cursor: pointer;"}
`;


/* .icone,
img.icone {
  color: var(--preto);
  width: 23px;
  height: 23px;
}

.icone svg {
  width: 23px;
  height: 23px;
} */


/* .flashcard.acerto {
    color: var(--cor-zap);
    text-decoration: line-through;
  }
  
  .flashcard.help {
    color: var(--cor-quase-nao-lembrei);
    text-decoration: line-through;
  }
  
  .flashcard.erro {
    color: var(--cor-nao-lembrei);
    text-decoration: line-through;
  }
  
  .action {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
  }
   
  .icone .erro {
    color: var(--nao-lembrei);
  }
  
  .icone .duvida {
    color: var(--cor-quase-nao-lembrei);
  }
  
  .icone .acerto {
    color: var(--cor-zap);
  } */
