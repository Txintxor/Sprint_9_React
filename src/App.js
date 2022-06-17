import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";
import Register from "./components/Register/Register.js";
import Recetas from "./components/Recetas/Recetas.js";
import InputRecetas from "./components/InputRecetas/InputRecetas.js";
import VisorRecetas from "./components/VisorRecetas/VisorRecetas.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import Page404 from "./components/Page404/Page404.js";


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Recetas" element={<PrivateRoute component={Recetas} />} />
          <Route exact path="/InputRecetas" element={<PrivateRoute component={InputRecetas} />} />
          <Route exact path="/VisorRecetas" element={<PrivateRoute component={VisorRecetas} />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
