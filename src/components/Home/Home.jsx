import { HomeContent } from "./Home.styled.js";
import { Card } from "../styled-c/styled-components";


const Home = () => {

  return (
    <main className="mainContainer">
      <HomeContent>
        <Card className="card" href="/Ficha">
          <p>Crea ficha técnica</p>
        </Card>
        <Card className="card" href="/Recetas">
          <p>Indice de recetas</p>
        </Card>
        {/* <Card className="card" href="/EscEvento">
          <p>Crea lista de producción para eventos</p>
        </Card>
        <Card className="card" href="/EscPartida">
          <p>Crea lista de producción para partida</p>
        </Card> */}
      </HomeContent>
    </main>
  );
};

export default Home;
