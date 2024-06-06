import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/slices/cartReducer";

export default function Product({ item }) {
  const dispatch = useDispatch();
  const { cartArr } = useSelector((state) => state.cart);
  const carrentItem = cartArr.find((elem) => item.id === elem.id);
  return (
    <div className="product">
      <Link to={`/product/${item.id}`}>
        <img className="product__img" src={item.image} alt="" />
      </Link>
      <div className="product__info">
        <span className="product__title">{item.title}</span>
        <div className="product__bottom">
          <span className="product__price">{item.price}₽</span>
          <button
            className="product__btn"
            onClick={() => dispatch(addToCart(item))}
          >
            Add{" "}
            {carrentItem && (
              <span className="product__count">{carrentItem.count}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
