import { useState, useEffect } from "react";
import styles from "../pages/styles.module.css";

function Burgers() {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingMenu = async () => {
      try {
        const response = await fetch(
          "https://free-food-menus-api-two.vercel.app/burgers",
        );
        const data = await response.json();
        setItens(data);
      } catch (error) {
        console.error("Erro ao carregar hambúrgueres", error);
      } finally {
        setLoading(false);
      }
    };

    loadingMenu();
  }, []);

  if (loading) return <p>Carregando o cardápio...</p>;
  return (
    <div>
      {itens.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} className={styles.img} />
          <h2>{item.name}</h2>
          <p>{item.dsc}</p>
          <span>R$ {item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Burgers;
