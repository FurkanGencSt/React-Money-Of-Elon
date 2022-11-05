import React from "react";
import "../styles/card.style.css";
import "../styles/card-list.style.css";
import "./products.style.css";
const SecretProducts = (
  {
    basket,

    product,
    id,

    price,

    total,
    money,
  },
  props
) => {
  return <div className="card-container" key={id}></div>;
};

export default SecretProducts;
