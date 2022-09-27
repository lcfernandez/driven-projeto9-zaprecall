import open from "../assets/img/play-outline-icon.svg";
import flip from "../assets/img/setinha.png";
import styled from "styled-components";

export default function Flashcard(props) {
    return (
        <FlashcardContainer></FlashcardContainer>
        /* if (props.status === "open") {
            {props.status === "open" ? <FlashcardOpenContainer> : <FlashcardContainer>}
            {props.status === "open" ? (props.face === "question" ? props.question : props.answer) : `Flashcard ${props.number}`}
            {props.status === "open" && props.face === "question" ? <Icone alt="Ação" src={props.status === "open" ? flip : open} /> : ""}
        {props.status === "open" ? </FlashcardOpenContainer> : </FlashcardContainer>}
        } else {

        }
        <>
            {props.status === "open" ? <FlashcardOpenContainer> : <FlashcardContainer>}
                {props.status === "open" ? (props.face === "question" ? props.question : props.answer) : `Flashcard ${props.number}`}
                {props.status === "open" && props.face === "question" ? <Icone alt="Ação" src={props.status === "open" ? flip : open} /> : ""}
            {props.status === "open" ? </FlashcardOpenContainer> : </FlashcardContainer>}
        </> */
    );
}

const FlashcardContainer = styled.div`
    align-items: center;
    background-color: white;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    display: flex;
    font-family: 'Recursive', cursive;
    height: 50px;
    justify-content: space-between;
    margin: 10px 0px;
    padding: 10px 10px;
    width: 300px;
`;

const FlashcardOpenContainer = styled(FlashcardContainer)`
    min-height: 130px;
    display: flex;
    flex-direction: column;
    background-color: var(--cor-fundo-card);
    cursor: default;
    padding: 20px 10px;
`;

/*.flashcard.aberto {
    
  }
  
  .aberto div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  
  .aberto.resposta div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .aberto img {
    cursor: pointer;
  }*/

const Icone = styled.img`
    color: var(--preto);
    width: 23px;
    height: 23px;
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
