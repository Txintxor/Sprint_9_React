import { useState } from "react";
import {
  InputContainer,
  InputField,
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

    console.log(ficha);
  };

  //Método que recoge los inputs de ingredientes y procesos y los introduce
  //en su repectivos arrays
  const fillArrayFicha = (id, value) => {
    if (!value) return;
    else {
    const element = document.querySelector("#" + id);

    switch (id) {
      case "ingrediente":
        const ingrediente = ficha.ingredientes.push(value);
        setFicha((prevState) => ({ ...prevState, ingrediente: ingrediente }));
        element.value = "";
        break;
      case "proceso":
        const proceso = ficha.procesos.push(value);
        setFicha((prevState) => ({ ...prevState, proceso: proceso }));
        element.value = "";
        break;
      default:
        break;
    }
    console.log(ficha);
  }
  };

  //Método que comprueba que todos los campos están rellenos y los
  //guarda (de momento en localStorage)
  const enviar = () => {
    let bool = true;
    const keys = Object.values(ficha);

    keys.map((e) => {
      console.log(e);
      if (e === undefined) {
        bool = false;
      }
    });

    bool
      ? window.localStorage.setItem(ficha.nom + ficha.fecha, ficha)
      : console.log("Faltan datos");
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
        <InputContainer>
          <label htmlFor="nom">Nombre plato</label>
          <p id="nomP">{ficha.nom}</p>
          <label htmlFor="partida">Partida</label>
          <p id="partidaP">{ficha.partida}</p>
          <label htmlFor="fecha">Fecha</label>
          <p id="fechaP">{ficha.fecha}</p>
        </InputContainer>
        <InputContainer>
          <label htmlFor="ingrediente">Ingredientes</label>
          {ficha.ingredientes.map((e, index) => (
            <p id="ingredientesP" key={e + index}>
              {e}
            </p>
          ))}
          <label htmlFor="proceso">Proceso de elaboración</label>
          {ficha.procesos.map((e, index) => (
            <p id="procesosP" key={e + index}>
              {e}
            </p>
          ))}
        </InputContainer>
        <Button onClick={enviar}>Envia</Button>
      </article>
    </main>
  );
};

export default Ficha;
