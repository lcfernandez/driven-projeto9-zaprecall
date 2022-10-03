import styled from "styled-components";

export default function GoalsInput({setGoal}) {
    return (
        <GoalsInputContainer
            data-identifier="goals-input"
            onChange={e => setGoal(e.target.value)}
            placeholder="Defina sua meta de zaps..."
        >
        </GoalsInputContainer>
    );
}

const GoalsInputContainer = styled.input`
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    color: #fb6b6b;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 43px;
    line-height: 16px;
    margin: 8px 0;
    padding: 0 10px;
    width: 246px;

    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    ::placeholder {
        color: #454545;
    }
`;
