import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../cart/Cart.jsx";
import { FaShoppingBag } from "react-icons/fa";
import styles from "./Navbar.module.css";

function NavBar() {
  const { cartCount } = useContext(cartContext);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.headerRow}>
          <h1>Nosso Cardapio</h1>
          <Link to="/carrinho" className={styles.cartIconContainer}>
            <FaShoppingBag size={24} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </Link>
        </div>

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
