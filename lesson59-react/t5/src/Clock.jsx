import React, {useState, useEffect} from 'react';


const Clock = (props) => {
  
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


  return (
    <div className="clock">
     <div className="clock__location">
       {props.location}
    </div>
    <div className="clock__time">
       7:00:51 AM
      </div>
    </div>
  );
};

export default Clock;