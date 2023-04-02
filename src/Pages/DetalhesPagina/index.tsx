import { type } from "os";
import { SetStateAction, useEffect, useState } from "react";
import Pesquisar from "../../Components/Buscas";
import MaisDetalhes from "../../Components/Personagens/Detalhes";



function DetalhesDaPersonagem() {

    const [busca, setBusca] = useState("");


    const [info, setInfo] = useState({});


    useEffect(() => {
        if (!busca) {
            fetch(`https://rickandmortyapi.com/api/character/?<query>=${busca}`)
                .then((resposta) => resposta.json())
                .then((resposta) => {
                    setInfo(resposta)
                    // console.log(resposta)

                })
        }
    }, [busca])

    return (
        <>
            <div>
                <div>
                    <Pesquisar  />
                </div>
                <div>

                    <MaisDetalhes />

                </div>
        </div>
        </>
    );
}

export default DetalhesDaPersonagem;


