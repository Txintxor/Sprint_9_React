import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Home from "../components/Home/Home";
import Ficha from "../components/Ficha/Ficha";
import Recetas from "../components/Recetas/Recetas";
import RecetasOutput from "../components/Recetas/RecetasOutput";
import Produccion from "../components/Produccion/Produccion";
import EscEvento from "../components/Produccion/ProdEvento";
import EscPartida from "../components/Produccion/ProdPartida";
import Admin from "../components/Admin/Admin";
import Page404 from "../components/Page404/Page404";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Ficha" element={<Ficha/>} />
        <Route exact path="/Recetas" element={<Recetas/>} />
        <Route exact path="/RecetasOutput" element={<RecetasOutput/>} />
        <Route exact path="/Produccion" element={<Produccion/>} />
        <Route exact path="/EscEvento" element={<EscEvento/>} />
        <Route exact path="/EscPartida" element={<EscPartida/>} />
        <Route exact path="/Admin" element={<Admin/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default withAuthenticationRequired(Rutas);
