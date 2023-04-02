import React, { useState } from "react";
import { IconBaseProps } from "react-icons";
import { MdOutlineFavoriteBorder } from "react-icons/md";

interface FavoritarProps{
    favoritos: IconBaseProps[];
    setFavoritos: React.Dispatch<React.SetStateAction<FavoritarProps[]>>;
}

const INICIAL_FAVORITES_VALUE: IconBaseProps[] = [];
const favoritados = React.createContext<FavoritarProps>({
    favoritos: INICIAL_FAVORITES_VALUE,
    setFavoritos: () => { console.warn(`setFavoritos ainda não está pronta`)}
})

function Favoritados() {
    const [favoritos, setFavoritos] = useState<FavoritarProps[]>([]);
    return ( 
        <>
           <div></div>
        </>
     );
}

export default Favoritados;



