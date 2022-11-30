import React, { Component } from 'react';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userData: {
      firstName:'John',
      lastName:'Doe',
    }};
  }

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState(this.state.userData = {...this.state.userData, [e.target.name]:e.target.value})
  }

  render() {

    const {firstName, lastName} = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">Hello, {firstName} {lastName}</h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile onChange={this.handleChange} userData={this.state.userData} />
        </main>
      </div>
    );
  }
}

export default App;
