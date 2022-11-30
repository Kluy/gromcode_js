import React from 'react';

const ProductsList = (props) => {
  const items = props.cartItems

  const summ = items.reduce((acc, {price}) => acc + price, 0)

  return (
    <div className="products">
      <ul className="products__list">
        {items.map(({id, name, price}) =>
        <li key={id} className="products__list-item">
          <span className="products__item-name">{name}</span>
          <span className="products__item-price">{price}</span>
        </li>
        )}
      </ul>
      <div className="products__total">Total: ${summ}</div>
    </div>
  );
};

export default ProductsList;
