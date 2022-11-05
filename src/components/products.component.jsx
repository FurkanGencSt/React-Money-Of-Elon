import React from "react";
import "../styles/card.style.css";
import "../styles/card-list.style.css";
import "./products.style.css";
const Products = (
  {
    basket,
    setBasket,
    product,
    id,
    name,
    src,
    price,
    description,
    hideDescription,
    total,
    money,
    text,
    hideLink,
    link,
    linkComment,
  },
  props
) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = (event) => {
    event.preventDefault();
    const checkedBasket = basket.find((item) => item.id === product.id);
    if (checkedBasket) {
      checkedBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkedBasket,
      ]);
      localStorage.setItem(
        basket.find((item) => item.id === product.id),
        checkedBasket.amount
      );
    } else {
      setBasket([...basket, { id: product.id, amount: 1, name: product.name }]);
    }
  };

  const deleteItem = (event) => {
    event.preventDefault();
    const checkedBasket = basket.find((item) => item.id === product.id);
    // const basketWithoutCurrent = [
    //   ...basket.filter((item) => item.id === product.id),
    // ];
    checkedBasket.amount -= 1;
    if (checkedBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkedBasket,
      ]);
    }
  };

  return (
    <div className="card-container" key={id}>
      <h3>{name}</h3>
      <div key={id} className="pictures">
        <img key={id} src={src} alt="" />
      </div>
      <h2>{price}</h2>
      <div key={id} className="texts">
        <p>{text}</p>
        <details>
          {hideDescription}
          <br />
          {linkComment} <br />
          {link ? <a href="link">Tıkla</a> : ""}
        </details>
      </div>
      <div key={id} className="buttonArea">
        <button
          className="button"
          disabled={!basketItem}
          onClick={(e) => deleteItem(e)}
        >
          -
        </button>
        <span>{(basketItem && basketItem.amount) || 0}</span>
        <button
          className="button"
          disabled={total + product.real_price > money}
          onClick={(e) => addBasket(e)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Products;
