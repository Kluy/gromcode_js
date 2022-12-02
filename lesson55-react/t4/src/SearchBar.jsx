import React from 'react';

const SearchBar = (props) => {
  return (
    <form>
      <input type="text" placeholder="Search.." value={props.filterText} />
      <p>
        <input type="checkbox" checked={props.inStockOnly} />
        Only show products in stock
      </p>
    </form>
  );
};

export default SearchBar;
