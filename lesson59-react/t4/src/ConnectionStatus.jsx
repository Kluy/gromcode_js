import React, {useState, useEffect} from 'react';
import classNames from 'classnames';


const ConnectionStatus = () => {
  
  const [onlineStatus, setStatus] = useState('online');
  
  const toggleStatus = (e) => {
   setStatus(e.type)
  }
  
  useEffect(() => {
    window.addEventListener('online', toggleStatus);
    window.addEventListener('offline', toggleStatus);
    return () => {
      window.removeEventListener('online', toggleStatus);
      window.removeEventListener('offline', toggleStatus);
  }
  }, [onlineStatus]);


   const onlineClass = classNames('status', {
      'status_offline': onlineStatus === 'offline',
    });
  return (
    <div className={onlineClass}>{onlineStatus}</div>
  );
};

export default ConnectionStatus;