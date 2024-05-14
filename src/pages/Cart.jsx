import React from "react";

import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function Cart({
  cartArr,
  clearCart,
  addToCart,
  minusCartItem,
  deleteCartItem,
}) {
  function getFullPrice() {
    let sum = 0;
    cartArr.forEach((element) => {
      sum += element.price * element.count;
    });
    return sum;
  }
  const fullPrice = getFullPrice();
  return (
    <div>
      <h1>Корзина</h1>
      <div className="cart__top">
        <Link to={"/"}>
          <button className={"filter__btn"}>Главная</button>
        </Link>
        <button className="cart__clear" onClick={clearCart}>
          Очистить корзину
        </button>
      </div>
      {/* ссылка для перехода между страницами */}
      <div className="cart__container">
        {cartArr.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
              addToCart={addToCart}
              minusCartItem={minusCartItem}
              deleteCartItem={deleteCartItem}
            />
          );
        })}
      </div>
      <div className="cart__bottom">
        <div className="cart__total">
          Всего товаров: <span className="bold">{cartArr.length} шт.</span>
        </div>
        <div className="cart__fullprice">
          Сумма заказа: <span className="bold">{fullPrice}₽</span>
        </div>
      </div>
    </div>
  );
}
