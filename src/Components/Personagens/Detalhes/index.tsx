import axios from "axios"
import { SetStateAction, useEffect } from "react"
import { useState } from "react"
import { BiSearch } from "react-icons/bi";
import { useParams } from "react-router-dom"

import styles from "./Detalhes.module.scss";

type DetalhesProps = {
    info: {
        next: string
    },

    id: number,
    image: string,
    name: string,
    gender: string,
    species: string,
    status: string,
    type: string,
    origin: {
        name: string,
    }
    location: {
        name: string,
    }
    created: string
}



function MaisDetalhes() {

    const [detalhes, setDetahles] = useState<DetalhesProps[]>([])

    const [proximaPagina, setProximaPagina] = useState('');


    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${detalhes}`)
            .then(resposta => {
                setDetahles(resposta.data.results)
                setProximaPagina(resposta.data.info.next)

            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    const verMais = () => {
        axios.get(proximaPagina)
            .then(resposta => {
                setDetahles([...detalhes, ...resposta.data.results]);
                setProximaPagina(resposta.data.info.next);
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    return (
        <>
            <div className={styles.personagens}>
                {detalhes.map(detalhe => (
                    <div key={detalhe.name}>
                        <div className={styles.personagens__imagem}>
                            <img src={detalhe.image} alt="Imagem do detalhes" />
                        </div>
                        <div className={styles.personagens__tags}>
                            <div className={styles.personagens__nome}>
                                Nome: {detalhe.name}
                            </div>
                            <div className={styles.personagens__gender}>
                                Gênero: {detalhe.gender}
                            </div>
                            <div className={styles.personagens__gender}>
                                Espécies: {detalhe.species}
                            </div>
                            <div className={styles.personagens__gender}>
                                Estátus: {detalhe.status}
                            </div>
                            <div className={styles.personagens__gender}>
                                Típo: {detalhe.type}
                            </div>
                            <div className={styles.personagens__gender}>
                                Origem: {detalhe.origin.name}
                            </div>
                            <div className={styles.personagens__gender}>
                                Localidade: {detalhe.location.name}
                            </div>
                            <div className={styles.personagens__gender}>
                                Criado em:   {detalhe.created}
                            </div>
                        </div>
                    </div>
                ))}

                {proximaPagina && <button onClick={verMais} className={styles.botaoVerMais}>Ver mais</button>}
            </div>
        </>
    );
}

export default MaisDetalhes;