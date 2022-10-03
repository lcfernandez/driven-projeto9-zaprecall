import arrow from "../assets/img/arrow.png";
import styled from "styled-components";

export default function DeckSelector({decks, setDeck}) {
    return (
        <DeckSelectorContainer
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
        </DeckSelectorContainer>
    );
}

const DeckSelectorContainer = styled.select`
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
