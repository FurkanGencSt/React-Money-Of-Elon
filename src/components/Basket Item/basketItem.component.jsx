import React from "react";
import "./basketItem.style.css";

const BasketItem = ({ item }) => {
  return (
    <div className="basketItems">
      <p>
        {item.name} x {item.amount}
      </p>
    </div>
  );
};

export default BasketItem;
