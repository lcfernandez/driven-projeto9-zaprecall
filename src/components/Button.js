import styled from "styled-components";

export default function Button({deckCards, disabled, setDeckCards, setOpen, text, type}) {
    function evaluate() {
        deckCards.forEach(card => card.open === true ? statusOpen(card) : "");
        setDeckCards(deckCards);
    }

    function statusOpen(obj) {
        setOpen(false);
        obj.status = type;
        obj.open = false;
    }

    return (
        <ButtonContainer disabled={disabled} onClick={evaluate} type={type}>
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
        }
    };
    border: none;
    border-radius: 4px;
    color: white;
    display: flex;
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    height: 40px;
    justify-content: center;
    margin: 0 1%;
    width: 24%;
    word-wrap: break-word;
    ${({disabled}) => {
        if (!disabled) {
            return `cursor: pointer;

                &:hover {
                    filter: brightness(0.7)
                }`
            ;
        }
    }}
`;
