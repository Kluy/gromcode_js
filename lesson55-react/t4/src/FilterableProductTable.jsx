import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
  }

  handleFilterTextChange = (e) => {
    this.setState({ filterText: e.target.value });
  };

  handleInStockChange = (e) => {
    this.setState({
      inStockOnly: e.target.checked,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleInStockChange={this.handleInStockChange}
          handleFilterTextChange={this.handleFilterTextChange}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
