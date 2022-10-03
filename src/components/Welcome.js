import ButtonStart from "./ButtonStart";

import arrow from "../assets/img/arrow.png";
import decks from "../assets/decks";
import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Welcome({deck, goal, setDeck, setGoal, setStart}) {
    return (
        <WelcomeContainer>
            <Content>
                <img alt="Logo" src={logo} />

                <div>ZapRecall</div>

                {deck ?
                    <GoalsInput
                        data-identifier="goals-input"
                        onChange={e => setGoal(e.target.value)}
                        placeholder="Defina sua meta de zaps..."
                    />
                    : <DeckSelector
                        arrow={arrow}
                        data-identifier="deck-selector"
                        defaultValue=""
                        onChange={(e) => setDeck(e.target.value)}
                        required
                    >
                        <option
                            data-identifier="deck-option"
                            disabled="disabled"
                            hidden="hidden"
                            key={0}
                            value=""
                        >
                            Escolha seu deck
                        </option>

                        {decks.map(
                            (deck, index) =>
                                <option key={index} value={index}>
                                    {deck.name} - {deck.cards.length} questões
                                </option>
                        )}
                    </DeckSelector>
                }
                <ButtonStart deck={deck} decks={decks} goal={goal} setStart={setStart} />
            </Content>
        </WelcomeContainer>
    );
}

const Content = styled.div`
    align-items: center;
    color: #ffffff;
    display: flex;
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

const DeckSelector = styled.select`
    border: none;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    height: 43px;
    line-height: 16px;
    margin: 8px 0;
    padding: 0 6px;
    width: 246px;

    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    :invalid {
        background: #ffffff url(${arrow}) no-repeat 95% 50%;
        color: #adadad;
    }

    /* removes the default arrow icon */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

const GoalsInput = styled.input`
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

const WelcomeContainer = styled.div`
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: center;
    width: inherit;
`;
