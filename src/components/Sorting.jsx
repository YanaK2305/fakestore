import React from "react";

export default function Sorting({ sort, setSort }) {
  return (
    <div className="sort">
      <div className="sort__text">Sorting:</div>
      <select
        className="sort__select"
        value={sort}
        onChange={(event) => setSort(event.target.value)}
      >
        <option value="">default</option>
        <option value="desc">desc</option>
        <option value="asc">asc</option>
      </select>
    </div>
  );
}
