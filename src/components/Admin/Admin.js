import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OutputList, Button2 } from "../styled-c/styled-components";
import axios from "axios";

const Admin = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [loaded, setIsLoaded] = useState(false);
  const id = Math.floor(Math.random() * 826) + 1;

  const RickMorty = () => {
    console.log("2");
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => {
        setInfo(data.data);
        setIsLoaded(true);
      })

      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    console.log("1");
    if (window.localStorage.getItem("log")) {
      RickMorty();
    } else {
      navigate("/AdminLogin", { replace: true });
    }
  }, []);

  return (
    <main className="mainContainer">
      {!loaded && <OutputList>LOADING</OutputList>}
      {loaded && (
        <OutputList>
          <img src={info.image} alt="Rick Morty avatar" />
          <p>Nombre: {info.name}</p>
          <p>Status: {info.status}</p>
          <p>Especie: {info.species}</p>
          <p>Sexo: {info.gender}</p>
          <p>Origen: {info.origin.name}</p>
          <p>Localización: {info.location.name}</p>
          <Button2 onClick={()=> window.location.reload()}>????</Button2>
        </OutputList>
      )}
    </main>
  );
};

export default Admin;
