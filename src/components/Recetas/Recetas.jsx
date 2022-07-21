import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../../applications/api";


import { OutputList, CardDiv } from "../styled-c/styled-components";



const localArray = [];
const Recetas = () => {
  const [recetas, setRecetas] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async () => {
      const data = await getRecipes();
      data.docs.map( e => localArray.push(e.data()));
      setRecetas(localArray);
      setLoading(false);      
  }


  useEffect(() => {
    fetchRecipe();
  }, []);

  useEffect(() => {
    
  },[recetas])

  return (
    <main className="mainContainer" id="fichaMain">
      <article>
        <CardDiv>Indice de recetas</CardDiv>
        <div  style={{ marginTop: "8rem" }}>
          {!loading && recetas.map((e) => (
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
        </div>
        {loading && <CardDiv>Cargando...</CardDiv>}
      </article>
    </main>
  );
};

export default Recetas;
