import { Outlet } from "react-router-dom";

import styled from "styled-components";

export default function Main() {
    return (
        <MainContainer>
            <Outlet />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    background-color: var(--cor-fundo);
`
