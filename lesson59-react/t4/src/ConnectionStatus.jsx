import React, {useState, useEffect} from 'react';
import classNames from 'classnames';


const ConnectionStatus = () => {
  
  const [time, setTime] = useState(0);
  
  const timer = (e) => {
    setInterval(() => {
      setTime()
    }, 1000);
    }
  
  useEffect(() => {
    window.addEventListener('online', toggleStatus);
    window.addEventListener('offline', toggleStatus);
    return () => {
      window.removeEventListener('online', toggleStatus);
      window.removeEventListener('offline', toggleStatus);
  }
  }, [onlineStatus]);


  return (
    <div className={classNames('status', {
      'status_offline': onlineStatus === 'offline',
    })}>{onlineStatus}</div>
  );
};

export default ConnectionStatus;