import React from "react";
import { Link } from "react-router-dom";

export default function Product({ item, addToCart, getCartItem }) {
  return (
    <div className="product">
      <Link to={`/product/${item.id}`}>
        <img className="product__img" src={item.image} alt="" />
      </Link>
      <div className="product__info">
        <span className="product__title">{item.title}</span>
        <div className="product__bottom">
          <span className="product__price">{item.price}₽</span>
          <button className="product__btn" onClick={() => addToCart(item)}>
            Add{" "}
            {getCartItem(item) && (
              <span className="product__count">{getCartItem(item).count}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
