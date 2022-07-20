import { useState } from "react";
import {
  InputContainer,
  OutputContainer,
  InputField,
  OutputList,
  FormList,
  Label,
  Button,
  Button2,
  CardDiv
} from "../styled-c/styled-components";

import { saveRecipe } from "../../applications/api";

const Ficha = () => {
  //Estado que guardara los datos de la ficha técnica
  const [ficha, setFicha] = useState({
    nom: "",
    partida: "",
    fecha: "",
    ingredientes: [],
    procesos: [],
  });

  //Estado que indica que faltan datos por introducir
  const [datos, setDatos] = useState(true);

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
  const enviar = (e) => {
    const output = Array.from(document.querySelectorAll(".outputP"));
    const input = Array.from(document.querySelectorAll(".input"));
    const values = Object.values(ficha);
    for (let i = 0; i < values.length; i++) {
      if (values[i].length === 0) {
        e.preventDefault();
        alert("Faltan datos");
        setDatos(false);
        break;
      } else {
        setDatos(true);
        if (i === values.length - 1) {
          e.preventDefault();
          saveRecipe(ficha);
          //Reinicia valores y texto de los inputs y outputs
          for (let i = 0; i < output.length; i++) {
            output[i].innerText = "";
          }
          for (let i = 0; i < input.length; i++) {
            input[i].value = "";
          }
          setFicha({
            nom: "",
            partida: "",
            fecha: "",
            ingredientes: [],
            procesos: [],
          });
        }
      }
    }
  };

  //ASÍ SE PODRAN AGREGAR Ingredientes Y procesos LOS DATOS APRETANDO ENTER
  const handleKeyPress = (e) => {
    const element = document.querySelector(e);
    if (element.id !== 0) {
      fillArrayFicha(element.id, element.value);
    }
  };

  //Retorno a Renderizar
  return (
    
    <main className="mainContainer" id="fichaMain">
      {/* Bloque de inputs */}
      <article>
        <InputContainer>
          <Label htmlFor="nom">Nombre plato</Label>
          <InputField
            onChange={fillFicha}
            type="text"
            name="nom"
            id="nom"
            className="input"
          />
          <Label htmlFor="partida">Partida</Label>
          <InputField
            onChange={fillFicha}
            type="text"
            name="partida"
            id="partida"
            className="input"
          />
          <Label htmlFor="fecha">Fecha</Label>
          <InputField
            onChange={fillFicha}
            type="date"
            name="fecha"
            id="fecha"
            className="input"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="ingrediente">Añade ingrediente</Label>
          <div className="inputField">
            <InputField
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  handleKeyPress("#ingrediente");
                }
              }}
              className="arrayInput, input"
              type="text"
              name="ingrediente"
              id="ingrediente"
            />
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
          <Label htmlFor="proceso">Añade paso de elaboración</Label>
          <div className="inputField, input">
            <InputField
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  handleKeyPress("#proceso");
                }
              }}
              className="arrayInput"
              type="text"
              name="proceso"
              id="proceso"
            />
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
      <FormList onSubmit={enviar}>
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
              <p className="outputP" id="ingredientesP" key={e + index}>
                -{e}
              </p>
            ))}
          </OutputList>
          <Label htmlFor="proceso">Proceso de elaboración</Label>
          <OutputList>
            {ficha.procesos.map((e) => (
              <p id="procesosP" className="outputP" key={e}>
                -{e}
              </p>
            ))}
          </OutputList>{" "}
          <Button2 type="submit">Envia</Button2>
        </OutputContainer>
        {/* {!datos && (
          <OutputList style={{ textAlign: "center" }}>
            <h1>Faltan datos</h1>
          </OutputList>
        )} */}
      </FormList>
    </main>
  );
};

export default Ficha;
