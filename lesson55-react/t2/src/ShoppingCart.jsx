import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

const ShoppingCart = (props) => {
  if (!props.userData) return null;

  return (
    <div className="column">
      <CartTitle />
      <ProductsList />
    </div>
  );
};

export default ShoppingCart;
