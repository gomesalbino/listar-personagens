
import styles from "./Rondomico.module.scss";

import temporadas from "../../../Data/temporadas.json";
import TituloHome from "../../TituloHomes";

function Inicial() {

    let pratosRecomendados = [...temporadas];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 4);


    return (
        <>
        <div>
            <TituloHome />
        </div>
            <div className={styles.tituloTemporada}>
                <h3 className={styles.tituloTemporada__texto}>As Temporadas</h3>
            </div>
            <div className={styles.imgTemporada}>
                {
                    pratosRecomendados.map((temporada, index) => (
                        <div className={styles.imgTemporada__imagens} key={index}>
                            <div  className={styles.imgTemporada__imagem}>
                                <img src={temporada.foto}  alt="A imagem da Temporada" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Inicial;






