import React, { useState } from "react";
import Filters from "../components/Filters";
import Products from "../components/Products";
import Menu from "../components/Menu";
import Sorting from "../components/Sorting";

export default function Home({ addToCart, getCartItem }) {
  const [activeFilter, setActiveFilter] = useState("electronics");
  const [sort, setSort] = useState("");
  console.log(sort);
  return (
    <div className="App">
      <header className="header">
        <Filters
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        <Sorting sort={sort} setSort={setSort} />
        <Menu />
      </header>
      <Products
        activeFilter={activeFilter}
        addToCart={addToCart}
        getCartItem={getCartItem}
        sort={sort}
      />
    </div>
  );
}
