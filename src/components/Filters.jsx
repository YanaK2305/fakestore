import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Filters({ activeFilter, setActiveFilter }) {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((json) => setFilters(json.data));
  }, []);
  console.log(activeFilter);
  return (
    <div className="filter">
      {filters.map((item, index) => {
        return (
          <button
            className={
              activeFilter === item ? "filter__btn active" : "filter__btn"
            }
            key={index}
            onClick={() => setActiveFilter(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
