import styles from "./Busca.module.scss";

import { BiSearch } from "react-icons/bi";
import { SetStateAction, useEffect, useState } from "react";

interface Props {
    busca: string,
    setBusca: React.Dispatch<SetStateAction<string>>;
}



function Pesquisar() {

    const [busca, setBusca] = useState("");

    const [info, setInfo] = useState({});

   
    useEffect(() => {
        if (busca) {
            fetch(`https://rickandmortyapi.com/api/character/?<query>=${busca}`)
                .then((resposta) => resposta.json())
                .then((resposta) => {
                    setInfo(resposta)
                    // console.log(resposta)
                    
                })
        }
    }, [busca])
    // const novaLista = listas.filter( item => pesquiseSuaPersonagem(item.name))
    // setListas(novaLista)


    // function pesquiseSuaPersonagem(name: string) {
    //     const regex = new RegExp(busca, 'i')
    //     return regex.test(name);
    // }



    return (
        <>
             <div className={styles.inputBusca}>
                <input type="text" placeholder={"Informe sua pesquisa"}
                    value={busca}
                    name={busca}
                    onChange={(evento) => setBusca(evento.target.value)}
                    className={styles.inputBusca__input}
                    autoFocus
                />
                <BiSearch size={40} className={styles.inputBusca__loopa} />
            </div>
        </>
    );
}

export default Pesquisar;

