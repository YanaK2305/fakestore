import React, { useState } from "react";
import Filters from "../components/Filters";
import Products from "../components/Products";
import Menu from "../components/Menu";
import Sorting from "../components/Sorting";

export default function Home() {
  return (
    <div className="App">
      <header className="header">
        <Filters />
        <Sorting />
        <Menu />
      </header>
      <Products />
    </div>
  );
}
