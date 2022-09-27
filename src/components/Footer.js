import Button from "./Button";
import styled from "styled-components";

export default function Footer(props) {
    return (
        <FooterContainer>
            <Buttons>
                <Button type="error" text="Não lembrei" />
                <Button type="almost" text="Quase não lembrei" />
                <Button type="zap" text="Zap!" />
            </Buttons>

            0/{props.totalCards} CONCLUÍDOS
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
