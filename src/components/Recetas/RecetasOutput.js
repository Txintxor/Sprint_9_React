import {
  OutputContainer,
  OutputList,
  Button,
} from "../styled-c/styled-components";

import { useLocation } from "react-router-dom";


const RecetasOutput = () => {

const location = useLocation();
const ficha = location.state;



  return (<main className="mainContainer" id="ficha">
  {/* Bloque de inputs */}

  {/* Bloque que muestra los inputs introducidos y tiene el botón de envío */}
  <article>
    <OutputContainer>
      <label htmlFor="nom">Nombre plato</label>
      <OutputList>
        <p className="outputP" id="nomP">
          {ficha.nom}
        </p>
      </OutputList>
      <label htmlFor="partida">Partida</label>
      <OutputList>
        <p className="outputP" id="partidaP">
          {ficha.partida}
        </p>
      </OutputList>

      <label htmlFor="fecha">Fecha</label>
      <OutputList>
        <p className="outputP" id="fechaP">
          {ficha.fecha}
        </p>
      </OutputList>
      <label htmlFor="ingrediente">Ingredientes</label>
      <OutputList>
        {ficha.ingredientes.map((e, index) => (
          <p id="ingredientesP" key={e + index}>
           -{e}
          </p>
        ))}
      </OutputList>
      <label htmlFor="proceso">Proceso de elaboración</label>
      <OutputList>
        {ficha.procesos.map((e, index) => (
          <p id="procesosP" key={e + index}>
           -{e}
          </p>
        ))}
      </OutputList>
    </OutputContainer>
</article>
</main>  );
}
 
export default RecetasOutput;