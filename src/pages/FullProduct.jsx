import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function FullProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({ rating: { rate: "", count: "" } });
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((json) => setProduct(json.data));
  }, []);
  console.log(product);
  return (
    <div className="fp">
      <Link to={"/"}>
        <button className={"filter__btn"}>Главная</button>
      </Link>
      <div className="fp__body">
        <div className="fp__left">
          <h1 className="fp__title">{product.title}</h1>
          <img className="fp__img" src={product.image} alt="" />
          <h4 className="fp__price">
            <span className="fp__text">Цена:</span> {product.price}₽
          </h4>
        </div>
        <div className="fp__right">
          <p className="fp__description">{product.description}</p>
          <div className="fp__rate">
            <p className="fp__value">
              <span className="fp__text">Рейтинг:</span> {product.rating.rate}
            </p>
            <p className="fp__count">
              <span className="fp__text">Количество оценок:</span>{" "}
              {product.rating.count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
