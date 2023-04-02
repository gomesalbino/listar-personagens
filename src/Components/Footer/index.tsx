

import styles from "./Footer.module.scss";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";

function Footer() {
    return (
        <>
            <div className={styles.redeSocial}>
                <div className={styles.redeSocial__iconeFilme}>
                    <GiFilmProjector size={50} className={styles.redeSocial__icoFil} />
                </div>
                <div className={styles.iconeSocial}>

               
                        <a href="https://github.com/gomesalbino" className={styles.iconeSocial__icones}>
                            <AiFillGithub size={30} className={styles.iconeSocial__icones} />
                        </a>
                    
                 
                        <a href="https://www.linkedin.com/in/albino-gomes-1b3493182/" className={styles.iconeSocial__icones} >
                            <AiOutlineLinkedin size={30} className={styles.iconeSocial__icones} />
                        </a>
                   
                   
                        <a href="#" className={styles.iconeSocial__icones} >
                            <AiOutlineTwitter size={30} className={styles.iconeSocial__icones} />
                        </a>
                 
                  
                        <a href="#" className={styles.iconeSocial__icones}>
                            <AiOutlineInstagram size={30} className={styles.iconeSocial__icones} />
                        </a>
                    
                    
                        <a href="#" className={styles.iconeSocial__icones}>
                            <AiOutlineYoutube size={30} className={styles.iconeSocial__icones} />
                        </a>



                </div>
            </div>
        </>
    );
}

export default Footer;



