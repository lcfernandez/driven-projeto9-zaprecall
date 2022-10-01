import ButtonStart from "./ButtonStart";

import arrowBlack from "../assets/img/arrow-black.png";
import arrowGray from "../assets/img/arrow-gray.png";
import decks from "../assets/decks";
import logo from "../assets/img/logo.png";
import styled from "styled-components";

export default function Welcome({deck, setDeck, setStart}) {
    return (
        <WelcomeContainer>
            <Content>
                <img alt="Logo" src={logo} />

                <div>ZapRecall</div>

                <DeckSelector
                    arrowBlack={arrowBlack}
                    arrowGray={arrowGray}
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
                                {deck.name}
                            </option>
                    )}
                </DeckSelector>
                <ButtonStart deck={deck} setStart={setStart} />
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
    background: #ffffff url(${arrowBlack}) no-repeat 95% 50%;
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

    &:invalid {
        background: #ffffff url(${arrowGray}) no-repeat 95% 50%;
        color: #adadad;
    }

    /* removes the default arrow icon */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`;

const WelcomeContainer = styled.div`
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: center;
    width: inherit;
`;
