import NavBar from "./components/NavBar/NavBar";
import Rutas from "./applications/Rutas";
import Footer from "./components/Footer/Footer";
import MyProvider from "./applications/provider";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./components/styled-c/styled-components";

const App = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="App">
      <MyProvider>
        <NavBar />
        <article id="contentContainer">
          <Rutas />
          <Button style= {{margin: "0 5rem"}} onClick={() => loginWithRedirect()}>Login</Button>
        </article>
        <Footer />
      </MyProvider>
    </div>
  );
};

export default App;
