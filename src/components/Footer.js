import Button from "./Button";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <Buttons>
                <Button type="error" text="Não lembrei" />
                <Button type="almost" text="Quase não lembrei" />
                <Button type="zap" text="Zap!" />
            </Buttons>

            0/4 CONCLUÍDOS
        </FooterContainer>
    );
}

const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    padding: 14px 10px 24px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
