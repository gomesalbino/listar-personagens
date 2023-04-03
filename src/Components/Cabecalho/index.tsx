
import styles from "./Cabecalho.module.scss";

import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { GiFilmProjector } from "react-icons/gi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import logo from "../../assets/logo.svg";

function Cabecalho({ children }: { children?: React.ReactNode }) {



    const navMenu = [
        {
            label: 'Home',
            to: '/'
        },

        {
            label: "Personagens",
            to: '/personagem'
        },

        {
            label: "Detalhes ",
            to: '/detalhes/:id'
        },



    ]



    const navigate = useNavigate();


    return (
        <>
            <header className={styles.cabecalho}>

                <div className={styles.logo}>
                    <img src={logo} alt="Logo do  projeto" />
                </div>

                <div className={styles.cabecalho__icone}>
                    <GiFilmProjector size={50} className={styles.cabecalho__icone} />
                </div>
                <div className={styles.cabecalho__menuNavega}>
                    {navMenu.map((menu) => (
                        <div key={menu.label} className={styles.cabecalho__navegacao}><Link to={menu.to}>{menu.label}</Link></div>
                    ))}

                    <MdOutlineFavoriteBorder size={30}
                        onClick={() => navigate(`/favoritos`)} className={styles.botaoFavoritar}
                    />
                </div>

            </header>
            <div>
                <hr className={styles.cabecalho__divisao} />
            </div>
            <div>
                {/* <Outlet />
                {children} */}
            </div>
        </>
    );
}

export default Cabecalho;



