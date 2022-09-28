import Button from "./Button";

import styled from "styled-components";

export default function Footer({disabledButtons, totalCards}) {
    return (
        <FooterContainer>
            <Buttons>
                <Button disabled={disabledButtons} text="Não lembrei" type="error" />
                <Button disabled={disabledButtons} text="Quase não lembrei" type="almost" />
                <Button disabled={disabledButtons} text="Zap!" type="zap" />
            </Buttons>

            0/{totalCards} CONCLUÍDOS
        </FooterContainer>
    );
}

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

const FooterContainer = styled.div`
    background-color: white;
    bottom: 0;
    color: black;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 20px;
    left: 0;
    padding: 14px 10px 24px 10px;
    position: fixed;
    right: 0;
    text-align: center;
    width: 100%;
    z-index: 1;
`;
