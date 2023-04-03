
import styles from "./TituloHome.module.scss";
import { FcFilmReel } from "react-icons/fc";
import { GiFilmSpool } from "react-icons/gi";
import { ImFilm } from "react-icons/im";
function TituloHome() {
    return (
        <>

            <div className={styles.homeTitulo}>
                <h2 className={styles.homeTitulo__texto}>
                    Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick and Morty
                </h2>
            </div>
            <div className={styles.homeIcones}>
                <FcFilmReel size={60} className={styles.homeIcones__icone} />
                <ImFilm size={60} className={styles.homeIcones__icone} />
                <GiFilmSpool size={60} className={styles.homeIcones__icone} />
            </div>

        </>
    );
}

export default TituloHome;