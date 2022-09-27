import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <ButtonContainer>
                <ErrorButton>Não lembrei</ErrorButton>
                <AlmostButton>Quase não lembrei</AlmostButton>
                <ZapButton>Zap!</ZapButton>
            </ButtonContainer>

            0/4 CONCLUÍDOS
        </FooterContainer>
    );
}

const Button = styled.button`
    border: none;
    word-wrap: break-word;
    margin: 0 1%;
    width: 22%;
    height: 40px;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        filter: brightness(0.7)
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const ErrorButton = styled(Button)`
    background-color: var(--cor-nao-lembrei);
`;

const AlmostButton = styled(Button)`
    background-color: var(--cor-quase-nao-lembrei);
`;

const ZapButton = styled(Button)`
    background-color: var(--cor-zap);
`;

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;