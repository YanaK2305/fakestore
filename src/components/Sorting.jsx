import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/slices/filterReducer";

export default function Sorting() {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);
  return (
    <div className="sort">
      <div className="sort__text">Sorting:</div>
      <select
        className="sort__select"
        value={sort}
        onChange={(event) => dispatch(setSort(event.target.value))}
      >
        <option value="">default</option>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
    </div>
  );
}
