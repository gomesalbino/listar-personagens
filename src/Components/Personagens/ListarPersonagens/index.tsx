import axios from "axios";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import styles from "../../Personagens/ListarPersonagens/ListaPersonagem.module.scss";

import favorite from "../../../assets/Favoritos/favorite.png";
import desfavoritar from "../../../assets/Favoritos/desfavoritar.png";
import { useFavoritoContext } from "../../Favoritos/context/Favoritos";

type DadosApi = {

    id: number,
    image: string,
    name: string,
    gender: string
}

function ListarPersonagens({ id, image, name, gender }: DadosApi) {

    const [listas, setListas] = useState<DadosApi[]>([])
    const [proximaPagina, setProximaPagina] = useState('');


    const [busca, setBusca] = useState("");

    const [filtrosDeBusca, setFiltrosDeBusca] = useState<DadosApi[]>([])

    const { favorito, adicionarFavorito } = useFavoritoContext();

    const ehFavoritado = favorito.some((fav: any) => {

        return fav.id === id;
    });

    const icone = !ehFavoritado ? desfavoritar : favorite;

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(resposta => (

                setListas(resposta.data.results),
                setProximaPagina(resposta.data.info.next)
            ))
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    const navigate = useNavigate();

    function redirecionaParaDetalhes() {
        navigate(`/detalhes/${id}`)
    }


    useEffect(() => {
        setFiltrosDeBusca(listas.filter(filte => filte.name.includes(busca)))
    }, [busca])


    const verMais = () => {
        axios.get(proximaPagina)
            .then(resposta => {
                setListas([...listas, ...resposta.data.results]);
                setProximaPagina(resposta.data.info.next);
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    return (
        <>
            <section className={styles.container}>
                <div className={styles.inputBusca}>
                    <input type="text" placeholder={"Informe sua pesquisa"}
                        value={busca}
                        name={busca}
                        onChange={(evento) => setBusca(evento.target.value)}
                        className={styles.inputBusca__input}
                        autoFocus
                    />
                    <BiSearch size={30} className={styles.inputBusca__loopa} />
                </div>


                <div className={styles.personagens}>

                    {busca.length > 0 ? (
                        <div className={styles.personagens_im}>
                            {filtrosDeBusca.map(lista => (
                                <div className={styles.personagens} key={lista.id}>
                                    <div className={styles.personagens__imagem}>

                                        <img src={lista.image} alt="Imagem do personagem" />

                                    </div>
                                
                                    <span className={styles.iconeFavo}>
                                        <img src={icone} alt="Imagem do icone Favoritado"
                                            className={styles.iconeFavo__icon}
                                                onClick={() => {
                                                    adicionarFavorito({ id, image, name, gender })
                                                }}
                                            />
                                        </span>
                                    <div className={styles.personagens__tags}>
                                        <div className={styles.personagens__nome}>
                                            {lista.name}
                                        </div>
                                        <div className={styles.personagens__gender}>
                                            {lista.gender}
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div className={styles.personagens}>
                            {filtrosDeBusca.map(lista => (
                                <div className={styles.personagens} key={lista.id}>
                                    <div className={styles.personagens__imagem}>
                                        <img src={lista.image} alt="Imagem do personagem" />
                                        <span className={styles.iconeFavo}>
                                        <img src={icone} alt="Imagem do icone Favoritado"
                                            className={styles.iconeFavo__icon}
                                                onClick={() => {
                                                    adicionarFavorito({ id, image, name, gender })
                                                }}
                                            />
                                        </span>

                                    </div>
                                    <div className={styles.personagens__tags}>
                                        <div className={styles.personagens__nome}>
                                            {lista.name}
                                        </div>
                                        <div className={styles.personagens__gender}>
                                            {lista.gender}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    )}


                </div>

            </section>

        </>
    );
}

export default ListarPersonagens;





