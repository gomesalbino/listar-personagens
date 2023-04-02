import axios from "axios";
import { SetStateAction, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import styles from "./ListaPersonagem.module.scss";



type ListaProps = {
    info: {
        next: string
    },
    id: number,
    image: string,
    name: string,
    gender: string

}

interface Props {
    busca: string,
    name: string,
   
    setBusca: React.Dispatch<SetStateAction<string>>;
}
function ListarPersonagens() {

    const [listas, setListas] = useState<ListaProps[]>([])
    const [proximaPagina, setProximaPagina] = useState('');


    const [busca, setBusca] = useState("");

    const [filtrosDeBusca, setFiltrosDeBusca] = useState<ListaProps[]>([])



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


   


    const { id } = useParams();
    const navigate = useNavigate();

    function redirecionaParaDetalhes(passa: typeof listas) {
        navigate(`/detalhes/${id}`, { state: { passa }, replace: true })
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

           
            <div className={styles.personagens}>

                {busca.length > 0 ? (
                    <div className={styles.personagens}>
                        {filtrosDeBusca.map(lista => (
                            <div className={styles.personagens} key={lista.id}>
                                <div className={styles.personagens__imagem} onClick={() => navigate(`/detalhes/${id}`)}>
                                    <img src={lista.image} alt="Imagem do personagem" />
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
                ) : (

                    <div className={styles.personagens}>
                        {filtrosDeBusca.map(lista => (
                            <div className={styles.personagens} key={lista.id}>
                                <div className={styles.personagens__imagem}>
                                    <span  className={styles.personagens__iconeFav}>
                                        <MdOutlineFavoriteBorder className={styles.favoritar} 
                                        size={30}
                                        />
                                     <img src={lista.image} alt="Imagem do personagem" />
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



                <div className={styles.detalhesBotao}>
                    <button onClick={() => redirecionaParaDetalhes(listas)}>
                        Ver detalhes
                    </button>
                </div>
                {proximaPagina && <button onClick={verMais} className={styles.botaoVerMais}>Ver mais</button>}
            </div>


        </>
    );
}

export default ListarPersonagens;

function useSelector(arg0: (state: any) => { categoria: any; }): { categoria: any; } {
    throw new Error("Function not implemented.");
}



