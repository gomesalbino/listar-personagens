import banner from "../../assets/Banner/banner.png";
import styles from "./PaginaPadrao.module.scss";
function PaginaPadrao() {
    return (
        <>
            <div className={styles.paginaGlobal}>
                    <img src={banner} alt="Imagem do Banner" className={styles.paginaGlobal__imagem} />
               
                    <p className={styles.paginaGlobal__texto}>Universos paralelos com Rick and Morty</p>
               
            </div>
        </>
    );
}

export default PaginaPadrao;



