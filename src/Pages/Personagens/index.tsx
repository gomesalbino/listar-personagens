import { useState } from "react";
import Pesquisar from "../../Components/Buscas";
import ListarPersonagens from "../../Components/Personagens/ListarPersonagens";



function Personagens() {

    return (
        <>
            <div>
                <div>
                    {/* <Pesquisar /> */}
                </div>
                <div>
                    <ListarPersonagens />
                </div>
            </div>
        </>
    );
}

export default Personagens;