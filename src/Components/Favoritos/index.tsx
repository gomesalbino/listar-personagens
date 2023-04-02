import ListarPersonagens from "../Personagens/ListarPersonagens";
import { useFavoritoContext } from "./context/Favoritos";

import styles from "./Favoritos.module.scss";

function Favoritos() {

    const {favorito} = useFavoritoContext();
    return ( 
        <>
        <section>
            <div className={styles.tituloFavorito}>
                <h2>Meus Favoritos</h2>
            </div>
            <div className={styles.favoritados}>
                {favorito.map((fav: any) =>{
                    return < ListarPersonagens {...fav} key={fav.id} />
                })}
            </div>
        </section>
        
        </>
     );
}

export default Favoritos;