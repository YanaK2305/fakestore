import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

export default function Products({
  activeFilter,
  addToCart,
  getCartItem,
  sort,
}) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/category/${activeFilter}?sort=${sort}`
      )
      .then((json) => setArr(json.data));
  }, [activeFilter, sort]);
  // в  массив зависимостей можем указать state-переменные
  // тогда при каждом изменении State-переменной будет выполнять функция внутри use эффекта
  console.log(arr);
  //   такая запись всегда, с массивом  зависимости пустым
  return (
    <div className="products">
      {arr.map((item) => {
        return (
          <Product
            item={item}
            key={item.id}
            addToCart={addToCart}
            getCartItem={getCartItem}
          />
        );
      })}
    </div>
  );
}
