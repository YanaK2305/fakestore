import React from "react";

export default function CartItem({
  item,
  addToCart,
  minusCartItem,
  deleteCartItem,
}) {
  return (
    <div className="cart__body">
      <div className="cart__left">
        <img src={item.image} alt="" className="cart__img" />
        <h3 className="cart__text">{item.title}</h3>
      </div>
      <div className="cart__right">
        <div className="cart__count">
          <button
            class="minus"
            disabled={item.count === 1}
            onClick={() => minusCartItem(item)}
          >
            -
          </button>
          <span class="value">{item.count}</span>
          <button class="plus" onClick={() => addToCart(item)}>
            +
          </button>
        </div>
        <div className="cart__info">
          <span className="cart__price">{item.price}₽</span>
          <button className="cart__del" onClick={() => deleteCartItem(item)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}
