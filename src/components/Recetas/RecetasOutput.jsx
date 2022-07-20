import {
  OutputContainer,
  OutputList,
  Label,
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
      <Label htmlFor="nom">Nombre plato</Label>
      <OutputList>
        <p className="outputP" id="nomP">
          {ficha.nom}
        </p>
      </OutputList>
      <Label htmlFor="partida">Partida</Label>
      <OutputList>
        <p className="outputP" id="partidaP">
          {ficha.partida}
        </p>
      </OutputList>

      <Label htmlFor="fecha">Fecha</Label>
      <OutputList>
        <p className="outputP" id="fechaP">
          {ficha.fecha}
        </p>
      </OutputList>
      <Label htmlFor="ingrediente">Ingredientes</Label>
      <OutputList>
        {ficha.ingredientes.map((e, index) => (
          <p id="ingredientesP" key={e + index}>
           -{e}
          </p>
        ))}
      </OutputList>
      <Label htmlFor="proceso">Proceso de elaboración</Label>
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