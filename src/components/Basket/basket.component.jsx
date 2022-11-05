import React from "react";
import BasketItem from "../Basket Item/basketItem.component.jsx";
import DataFormat from "../../dataFormat.component";
import "./basket.style.css";
const Basket = ({ name, basket, product, total }) => {
  return (
    <div>
      {basket.map((item) => {
        console.log(item);
        return (
          <BasketItem
            key={item.id}
            item={item}
            product={product.map((p) => p.id === item.id)}
          />
        );
      })}
      <div>Toplam: ${total > 1000 ? DataFormat(total) : total}</div>
    </div>
  );
};

export default Basket;
