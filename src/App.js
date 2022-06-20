import NavBar from "./components/NavBar/NavBar";
import Rutas from "./applications/Rutas";
import Footer from "./components/Footer/Footer";
import MyProvider from "./applications/provider";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MyProvider>
          <Rutas />
      </MyProvider>
      <Footer />
    </div>
  );
};

export default App;
