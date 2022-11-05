import "../../App.css";
import product from "../../database.json";
import "../../styles/card.style.css";
import "../../styles/card-list.style.css";
import Products from "../products.component.jsx";
import Header from "../header/header.component.jsx";
import "./main.style.css";
import { useEffect, useState } from "react";
import Basket from "../Basket/basket.component.jsx";
const Main = (props) => {
  const [money, setMoney] = useState(100000000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState();
  console.log(basket);
  useEffect(() => {
    setTotal(
      basket.reduce((acc, current) => {
        return (
          acc +
          current.amount *
            product.find((product) => product.id === current.id).real_price
        );
      }, 0)
    );
  }, [basket]);
  const resetBasket = () => {
    setBasket([]);
  };
  let date = new Date();
  let year = date.getFullYear();
  useEffect(() => {}, [year]);
  return (
    <div className="App">
      <Header
        total={total}
        money={money}
        setMoney={setMoney}
        setTotal={setTotal}
        basket={basket}
        setBasket={setBasket}
        product={product}
      />
      <div className="card-list">
        <div className="card-container gidiciContainer">
          <Basket name="" basket={basket} product={product} total={total} />
          <button className="button" onClick={resetBasket}>
            Sepeti Sıfırla
          </button>
        </div>
      </div>
      <div className="card-list">
        {product.map((item, index) => {
          return (
            <div className="card-container" key={item.id}>
              <Products
                link={item.link}
                linkComment={item.linkComment}
                total={total}
                money={money}
                product={item}
                basket={basket}
                setBasket={setBasket}
                name={item.name}
                price={item.price}
                descrition={item.description}
                text={item.text}
                hideDescription={item.hideDescription}
                real_price={item.real_price}
                src={item.src}
              />
            </div>
          );
        })}
      </div>
      <div className="footer">
        <footer>
          <h4>Made by Furkan Genç 2022{year === 2022 ? "" : `- ${year}`}</h4>
          <ul className="footer-links">
            <li>
              --
              <a href="https://www.linkedin.com/in/furkan-gen%C3%A7-3868b81b7/">
                Linkedin
              </a>
              --
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Main;
