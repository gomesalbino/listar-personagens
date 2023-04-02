


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cabecalho from "./Components/Cabecalho";
import Favoritos from "./Components/Favoritos";

import Footer from "./Components/Footer";
import PaginaPadrao from "./Components/PaginaPadrao";
import DetalhesDaPersonagem from "./Pages/DetalhesPagina";


import Home from "./Pages/Home";
import Personagens from "./Pages/Personagens";



function AppRouter() {
    return (
        <>
            <main>
                <Router>
                 <Cabecalho />
                 <PaginaPadrao />
                    <Routes>
                        <Route path="/" element={<Home />}>
                        </Route>
                        <Route path="/personagem" element={<Personagens />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/detalhes/:id" element={<DetalhesDaPersonagem />} />
                    </Routes>
                    <Footer />
                </Router>
            </main>
        </>
    );
}

export default AppRouter;





