// import {useState} from 'react';

import NavBar from "./components/NavBar/NavBar";
import Rutas from "./applications/Rutas";
import Footer from "./components/Footer/Footer";
import MyProvider from "./applications/provider";

const App = () => {
  // const [loaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="background"></div>
      <div className="App">
        <NavBar />
        <MyProvider>
          <Rutas />
        </MyProvider>
        <Footer />
      </div>
    </>
  );
};

export default App;
