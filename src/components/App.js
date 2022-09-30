import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "../assets/GlobalStyle";
import Main from './Main';
import Recall from './Recall';
import Welcome from './Welcome';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Welcome />} />
                    <Route path="recall" element={<Recall />} />
                </Route>
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    );
}
