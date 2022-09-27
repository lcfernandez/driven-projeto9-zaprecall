import styled from "styled-components";

export default function Button(props) {
    return (
        <ButtonContainer type={props.type}>
            {props.text}
        </ButtonContainer>
    );
}

const ButtonContainer = styled.button`
    align-items: center;
    background-color: ${(props) => {
        switch (props.type) {
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
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: 12px;
    font-weight: 700;
    height: 40px;
    justify-content: center;
    margin: 0 1%;
    width: 24%;
    word-wrap: break-word;

    &:hover {
        filter: brightness(0.7)
    }
`;
