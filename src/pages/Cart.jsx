import React from "react";

import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartReducer";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartArr, fullPrice } = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Корзина</h1>
      <div className="cart__top">
        <Link to={"/"}>
          <button className={"filter__btn"}>Главная</button>
        </Link>
        <button className="cart__clear" onClick={() => dispatch(clearCart())}>
          Очистить корзину
        </button>
      </div>
      {/* ссылка для перехода между страницами */}
      <div className="cart__container">
        {cartArr.map((item) => {
          return <CartItem item={item} key={item.id} />;
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
