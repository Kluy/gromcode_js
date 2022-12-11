import React, {useState, useEffect} from 'react';

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


  const onlineClass = onlineStatus === 'online' ? "status" : "status status_offline"
  return (
    <div className={onlineClass}>{onlineStatus}</div>
  );
};

export default ConnectionStatus;