import React, {useState, useEffect} from 'react';

const Dimensions = () => {

  const [dimension, setDimension] = useState({height:null, width:null});

  useEffect(() => {
    window.addEventListener('resize', setDimension);
    setDimension({height: window.innerHeight, width:window.innerWidth});
    return () => window.removeEventListener('resize', setDimension);
  }, [dimension.height, dimension.width]);

  return (
     <div className="dimensions">{dimension.width}px - {dimension.height}px</div>

  );
};

export default Dimensions;
