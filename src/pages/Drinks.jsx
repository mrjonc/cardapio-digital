import { useState, useEffect } from "react";
import styles from "../pages/styles.module.css";

function Drinks() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingMenu = async () => {
      try {
        const response = await fetch(
          "https://free-food-menus-api-two.vercel.app/drinks",
        );
        const data = await response.json();
        setItens(data);
      } catch (error) {
        console.error("Erro ao carregar bebidas", error);
      } finally {
        setLoading(false);
      }
    };

    loadingMenu();
  }, []);

  if (loading) return <p>Carregando o cardápio...</p>;
  return (
    <div>
      <hr className={styles.division} />
      {itens.map((item) => (
        <div key={item.id} className={styles.item}>
          <img src={item.img} alt={item.name} className={styles.img} />

          <div className={styles.container}>
            <h2>{item.name}</h2>
            <p>{item.dsc}</p>
            <span>R${item.price},00</span>
          </div>

          <hr className={styles.division} />
        </div>
      ))}
      x
    </div>
  );
}

export default Drinks;
