
import NavBar from "./components/NavBar/NavBar";
import Rutas from "./applications/Rutas";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import MyProvider from "./applications/provider";


const App = () => {
  return (
    <div className="App">
      <MyProvider>
      <NavBar />
      <Rutas/>
      <Login/>
      <Logout/>
      </MyProvider>
    </div>
  );
};

export default App;
