import styled from "styled-components";

export default function ButtonStart({deck, decks, goal, max, setStart}) {
    function checkGoal() {
        if (isNaN(goal)) {
            alert("Digite apenas números!");
        } else if (goal < 1) {
            alert("O mínimo de Zaps possível é 1!");
        } else if (goal > decks[deck].cards.length) {
            alert("O número de Zaps é maior que o de questões!");
        } else {
            setStart(true);
        }
    }

    return (
        <ButtonStartContainer
            data-identifier="start-btn"
            disabled={goal ? "" : true}
            onClick={checkGoal}>
            Iniciar Recall!
        </ButtonStartContainer>
    );
}

const ButtonStartContainer = styled.button`
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #D70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #d70900;
    cursor: pointer;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    height: 54px;
    line-height: 22px;
    margin: 10px 0px;
    width: 246px;

    :disabled {
        background-color: #e8e8e8;
        border: none;
        color: #c0c0c0;
    }
`;
