import React from 'react';

const SearchBar = (props) => {
  return (
    <form>
      <input
        onChange={props.handleFilterTextChange}
        type="text"
        placeholder="Search..."
        value={props.filterText}
      />
      <p>
        <input
          type="checkbox"
          onChange={props.handleInStockChange}
          checked={props.inStockOnly}
        />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
