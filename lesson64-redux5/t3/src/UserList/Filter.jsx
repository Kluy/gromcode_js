import React from "react";

const Filter = ({filterText, count, onChange}) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input onChange={(e) => onChange(e.target.value)} type="text" className="filter__input" value={filterText} />
    </div>
  )
}

export default Filter;