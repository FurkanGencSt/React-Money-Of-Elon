import React from "react";

import DataFormat from "../../dataFormat.component";
import "./header.style.css";
const Header = (props) => {
  let currentMoney = props.money - props.total;

  return (
    <div className="plus">
      <div className="body">
        <div className="logo">
          <a href="https://twitter.com/elonmusk">
            <img alt="musk" src={require("../../pictures/musk.jpg")} />
          </a>
        </div>
        <div className="list">
          <ul>
            <li>
              Kalan Para: $
              {currentMoney > 0
                ? DataFormat(currentMoney)
                : "Tüm para bitti..."}
            </li>

            <li className="gidici"> Harcanan: {props.total}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
