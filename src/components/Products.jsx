import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsReducer";
import ProductSkeleton from "../loading/ProductSkeleton";

export default function Products() {
  const dispatch = useDispatch();
  const { activeFilter, sort } = useSelector((state) => state.filter);
  const { arr, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ activeFilter, sort }));
  }, [activeFilter, sort]);
  // в  массив зависимостей можем указать state-переменные
  // тогда при каждом изменении State-переменной будет выполнять функция внутри use эффекта
  console.log(arr);
  console.log(loading);
  console.log(error);
  const skeletons = [...new Array(6)].map(() => <ProductSkeleton />);
  //   такая запись всегда, с массивом  зависимости пустым
  if (error) {
    return <div className="error">{error}</div>;
  }
  return (
    <div className="products">
      {loading
        ? skeletons
        : arr.map((item) => {
            return <Product item={item} key={item.id} />;
          })}
    </div>
  );
}
