import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  constructor(props){
    super(props);
    this.state={cartItems:[
      {
        id:'2',
        name:'tank',
        price: 1999999,
      },
      {
        id:'3',
        name:'helicopter',
        price: 299999,
      },
      {
        id:'4',
        name:'plane',
        price: 12999999,
      }
    ]}

  }
  render(){
    const cartItems = this.state.cartItems;
    return (
      <div className="column">
        <CartTitle count={cartItems.length} userName={this.props.userName} />
        <ProductsList cartItems={cartItems} />
      </div>
    );
  }
};

export default ShoppingCart;
