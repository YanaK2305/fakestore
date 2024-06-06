import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveFilter } from "../redux/slices/filterReducer";

export default function Filters() {
  const dispatch = useDispatch();
  const { activeFilter } = useSelector((state) => state.filter);
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
            onClick={() => dispatch(setActiveFilter(item))}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
