import Burgers from "./Burgers.jsx";
import Pizzas from "./Pizzas.jsx";
import Drinks from "./Drinks.jsx";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <h2>Burgers:</h2>
        <hr />
        <Burgers />
        <h2>Pizzas:</h2>
        <hr />
        <Pizzas />
        <h2>Bebidas:</h2>
        <hr />
        <Drinks />
      </div>
    </>
  );
}

export default Home;
