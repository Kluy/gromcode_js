import React from 'react';
import Online from './Online';
import Offline from './Offline';

const Status = (props) => {
  if (props.isOnline) return <Online />;

  return <Offline />;
};

export default Status;
