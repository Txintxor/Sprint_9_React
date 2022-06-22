import { useState } from "react";
import {
  InputContainer,
  OutputContainer,
  InputField,
  OutputList,
  Button,
} from "../styled-c/styled-components";

const Ficha = () => {
  //Estado que guardara los datos de la ficha técnica
  const [ficha, setFicha] = useState({
    nom: "",
    partida: "",
    fecha: "",
    ingredientes: [],
    procesos: [],
  });

  //Método que recoge los datos introducidos en el input y los pasa al
  //estado ficha
  const fillFicha = (e) => {
    switch (e.target.id) {
      case "nom":
        setFicha((prevState) => ({ ...prevState, nom: e.target.value }));
        break;
      case "partida":
        setFicha((prevState) => ({ ...prevState, partida: e.target.value }));
        break;
      case "fecha":
        setFicha((prevState) => ({ ...prevState, fecha: e.target.value }));
        break;

      default:
        break;
    }
  };

  //Método que recoge los inputs de ingredientes y procesos y los introduce
  //en su repectivos arrays
  const fillArrayFicha = (id, value) => {
    if (!value) return;
    else {
      const element = document.querySelector("#" + id);

      switch (id) {
        case "ingrediente":
          const ingre = ficha.ingredientes.concat(value);
          console.log(ingre);
          setFicha((prevState) => ({
            ...prevState,
            ingredientes: ingre,
          }));
          element.value = "";
          break;
        case "proceso":
          const procesos = ficha.procesos.concat(value);
          setFicha((prevState) => ({ ...prevState, procesos: procesos }));
          element.value = "";
          break;
        default:
          break;
      }
      
    }
  };

  //Método que comprueba que todos los campos están rellenos y los
  //guarda (de momento en localStorage)
  const enviar = () => {
    let bool = true;
    const keys = Object.values(ficha);

    keys.map((e) => {
      if (e === undefined) {
        bool = false;
        console.log("Faltan datos");
        return 0  ;
      }
      window.localStorage.setItem(
        ficha.nom + ficha.fecha,
        JSON.stringify(ficha)
      );
      return 0;
    });
  };

  //Retorno a Renderizar
  return (
    <main className="mainContainer" id="fichaMain">
      {/* Bloque de inputs */}
      <article>
        <InputContainer>
          <label htmlFor="nom">Nombre plato</label>
          <InputField onChange={fillFicha} type="text" name="nom" id="nom" />
          <label htmlFor="partida">Partida</label>
          <InputField
            onChange={fillFicha}
            type="text"
            name="partida"
            id="partida"
          />
          <label htmlFor="fecha">Fecha</label>
          <InputField
            onChange={fillFicha}
            type="date"
            name="fecha"
            id="fecha"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="ingrediente">Ingredientes</label>
          <div style={{ display: "inline-block" }}>
            <InputField type="text" name="ingrediente" id="ingrediente" />
            <Button
              onClick={() =>
                fillArrayFicha(
                  "ingrediente",
                  document.querySelector("#ingrediente").value
                )
              }
            >
              +
            </Button>
          </div>
          <label htmlFor="proceso">Proceso de elaboración</label>
          <div style={{ display: "inline-block" }}>
            <InputField type="text" name="proceso" id="proceso" />
            <Button
              onClick={() =>
                fillArrayFicha(
                  "proceso",
                  document.querySelector("#proceso").value
                )
              }
            >
              +
            </Button>
          </div>
        </InputContainer>
      </article>

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
            {ficha.procesos.map((e) => (
              <p id="procesosP" key={e}>
                -{e}
              </p>
            ))}
          </OutputList>{" "}
          <Button onClick={enviar}>Envia</Button>
        </OutputContainer>
      </article>
    </main>
  );
};

export default Ficha;
