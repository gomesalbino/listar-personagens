import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/EstilosGlobais.module.scss";

import Router from "./routes"
import FavoritosProvider from './Components/Favoritos/context/Favoritos';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FavoritosProvider>
      <Router />
    </FavoritosProvider>
  </React.StrictMode>
);

