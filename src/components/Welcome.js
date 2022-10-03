import ButtonStart from "./ButtonStart";
import DeckSelector from "./DeckSelector";
import GoalsInput from "./GoalsInput";

import decks from "../assets/decks";
import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Welcome({deck, goal, setDeck, setGoal, setStart}) {
    return (
        <WelcomeContainer>
            <Content>
                <img alt="Logo" src={logo} />

                <div>ZapRecall</div>

                {deck ? <GoalsInput setGoal={setGoal} /> : <DeckSelector decks={decks} setDeck={setDeck} />}

                <ButtonStart deck={deck} decks={decks} goal={goal} setStart={setStart} />
            </Content>
        </WelcomeContainer>
    );
}

const Content = styled.div`
    align-items: inherit;
    color: #ffffff;
    display: inherit;
    flex-direction: column;
    font-family: "Righteous", cursive;
    font-size: 36px;

    div {
        margin: 24px 0;
    }

    img {
        height: 161px;
    }
`;

const WelcomeContainer = styled.div`
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: center;
    width: inherit;
`;
