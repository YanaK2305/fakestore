import React from "react";
import { Link } from "react-router-dom";
import cart from "../img/pngwing.com (1).png";

export default function Menu() {
  return (
    <div className="menu">
      <Link to={"/cart"}>
        <img className="cart__img" src={cart} alt="" />
      </Link>
    </div>
  );
}
