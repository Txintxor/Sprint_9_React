import { Card, HomeContent } from "../styled-c/styled-components";

const Produccion = () => {
  return (
    <main className="mainContainer">
      <HomeContent>
        <Card href="/ProdEvento">
          <p>Crea lista de producción para eventos</p>
        </Card>
        <Card href="/ProdPartida">
          <p>Crea lista de producción para partida</p>
        </Card>
      </HomeContent>
    </main>
  );
};

export default Produccion;
