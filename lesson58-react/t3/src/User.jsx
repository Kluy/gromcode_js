import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);
     this.state = {
      name:'',
      location:'',
      avatar_url:'',
    }
  }

 fetchData = () => fetch(`https://api.github.com/users/${this.props.match.params.userId}`)
 .then(response => response.json())
 .then(({name, location, avatar_url}) => {
      console.log('fetch')
      this.setState({
        name:name,
        location:location,
        avatar_url:avatar_url,
      });
    }
  )

  componentDidMount(){
    console.log('didmount')
    this.fetchData();
  }
  
  componentDidUpdate(prevProps){
    console.log('didupdate')

    if(prevProps.match.params.userId !== this.props.match.params.userId){

      this.fetchData();
    }
  }

  render (){
    console.log('render');
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
