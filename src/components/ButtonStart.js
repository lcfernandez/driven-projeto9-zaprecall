import styled from "styled-components";

export default function ButtonStart() {

    return (
        <ButtonStartContainer>
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
`;
