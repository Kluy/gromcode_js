import React, { Component } from 'react';

class Search extends Component {
  state = {
    input: '',
  };

  onSubmit = (e) => {
    alert(`Search text: ${this.state.input}`);
    e.preventDefault();
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.input}
          className="search__input"
        />
        <button className="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
