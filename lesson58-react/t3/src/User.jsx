import React, { Component } from 'react';
import { fetchData } from './gateway';

class User extends Component {
  constructor(props){
    super(props);
     this.state = {
      name:'',
      location:'',
      avatar_url:'https://avatars1.githubusercontent.com/u/9919?v=4'
    }
  }

render (){

 fetchData(this.props.match.params.userId)
    .then(({name, location, avatar_url}) => {
      this.setState({
        name:name,
        location:location,
        avatar_url:avatar_url
      });
    }
  )

  return (
    <div className="user">
      <img
        alt="User Avatar"
        src={this.state.avatar_url}
        className="user__avatar"
        />
      <div className="user__info">
        <span className="user__name">{this.state.name}</span>
        <span className="user__location">{this.state.location}</span>
      </div>
    </div>
  );
}
};

export default User;
