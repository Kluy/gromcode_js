import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

const Greeting = (props) => {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

export default Greeting;
