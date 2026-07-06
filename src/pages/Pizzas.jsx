import { useState, useEffect } from "react";
import styles from "../pages/styles.module.css";
import { FaPlus } from "react-icons/fa6";

function Pizzas() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingMenu = async () => {
      try {
        const response = await fetch(
          "https://free-food-menus-api-two.vercel.app/pizzas",
        );
        const data = await response.json();
        setItens(data);
      } catch (error) {
        console.error("Erro ao carregar pizzas", error);
      } finally {
        setLoading(false);
      }
    };

    loadingMenu();
  }, []);

  if (loading) return <p>Carregando o cardápio...</p>;
  return (
    <div>
      <div className={styles.gridContainer}>
        {itens.map((item) => (
          <div key={item.id} className={styles.itemWrapper}>
            <div className={styles.itemContainer}>
              <img src={item.img} alt={item.name} className={styles.img} />

              <div className={styles.contentBlock}>
                <div className={styles.titleRow}>
                  <h2>{item.name}</h2>
                  <span>R${item.price}</span>
                </div>
                <div className={styles.informations}>
                  <p>{item.dsc}</p>
                  <button className={styles.btn}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pizzas;
