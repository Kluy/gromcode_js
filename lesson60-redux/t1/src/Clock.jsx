import React, {useState, useEffect} from 'react';
import moment from 'moment';


const Clock = (props) => {

  const newTime = () => moment(new Date()).add(props.offset,'hours').format('h:mm:ss a');
  const [time, setTime] = useState(newTime);
  
  useEffect(() => {
    const intervalId = setInterval(() => {setTime(newTime)}, 1000);
    return () => {clearInterval(intervalId)}
  }, [time]);


  return (
    <div className="clock">
      <div className="clock__location">
        {props.location}
      </div>
      <div className="clock__time">
        {time}
      </div>
    </div>
  );
};

export default Clock;