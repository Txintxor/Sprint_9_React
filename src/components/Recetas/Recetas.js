import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { OutputList } from "../styled-c/styled-components";
const localArray = [];
const Recetas = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    Object.keys(localStorage).forEach((key) =>
      localArray.push(JSON.parse(localStorage.getItem(key)))
    );
    setRecetas(localArray);
  }, []);

  const muestra = () => {
    Object.keys(localStorage).forEach((key) => {
      localArray.push(localStorage.getItem(key));
    });
    localArray.map((e) => console.log(e));
  };

  return (
    <main className="mainContainer" id="fichaMain">
      <article>
        {recetas.map((e) => (
          <Link to="/RecetasOutput" state={e} key={e.nom + e.fecha}>
            <OutputList>
              -Nombre de plato: {e.nom}
              <br />
              -Partida: {e.partida}
              <br />
              -Fecha: {e.fecha}
            </OutputList>
          </Link>
        ))}
      </article>
    </main>
  );
};

export default Recetas;
