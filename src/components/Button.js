import styled from "styled-components";

export default function Button({answeredCards, deckCards, setAnsweredCards, setOpenState, text, type}) {
    function evaluate() {
        deckCards.forEach(card => card.open === true ? statusOpen(card) : (card.status ? "" : card.disabled = false));
        setAnsweredCards(answeredCards + 1);
        setOpenState(false);
    }

    function statusOpen(card) {
        card.disabled = true;
        card.open = false;
        card.status = type;
    }

    return (
        <ButtonContainer
            data-identifier={`${type === "zap" ? type : (type === "almost" ? type + "-" : "") + "forgot"}-btn`}
            onClick={evaluate}
            type={type}
        >
            {text}
        </ButtonContainer>
    );
}

const ButtonContainer = styled.button`
    align-items: center;
    background-color: ${({type}) => {
        switch (type) {
            case "error":
                return "var(--cor-nao-lembrei)";
            case "almost":
                return "var(--cor-quase-nao-lembrei)";
            case "zap":
                return "var(--cor-zap)";
            default:
                return "green";
        }
    }};
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    height: 36px;
    justify-content: center;
    padding: 0 6px;
    width: 85px;
    word-wrap: break-word;
    &:hover {
        filter: brightness(0.7)
    }
`;
