import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <h1>Nosso Cardapio</h1>
        <div className={styles.options}>
          <Link to="/">Todos</Link>
          <Link to="/burgers">Hamburguer</Link>
          <Link to="/pizzas">Pizzas</Link>
          <Link to="/bebidas">Bebidas</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
