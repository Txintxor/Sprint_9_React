import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

// import PrivateRoute from "./PrivateRoute";

import Home from "../components/Home/Home";
import Recetas from "../components/Recetas/Recetas";
import InputRecetas from "../components/InputRecetas/InputRecetas";
import VisorRecetas from "../components/VisorRecetas/VisorRecetas";
import Admin from "../components/Admin/Admin";
import Page404 from "../components/Page404/Page404";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Recetas" element={<Recetas/>} />
        <Route exact path="/InputRecetas" element={<InputRecetas/>} />
        <Route exact path="/VisorRecetas" element={<VisorRecetas/>} />
        <Route exact path="/Admin" element={<Admin/>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default withAuthenticationRequired(Rutas);
