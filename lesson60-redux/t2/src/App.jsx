import React, { useState } from 'react';
import Header from './Header';
import { UserContext } from './user-context';

const App = () => {

  const [userData, setUserData] = useState({name:'Nikola Tesla', avatar_url:'https://avatars3.githubusercontent.com/u10001'})

  return (
    <div className='page'>
      <UserContext.Provider value={userData}>
        <Header/>
      </UserContext.Provider>
    </div>
  );
}


export default App;
