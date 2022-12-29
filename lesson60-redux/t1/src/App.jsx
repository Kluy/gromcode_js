import React from 'react';
import ThemedButton from './ThemedButton';

const App = () => {

  const theme = {
    dark:{
      fontColor:'#ffffff',
      background:'#222222',
    },
    light:{
      fontColor:'#000000',
      background:'#eeeeee'
    }
  }

  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export const ThemeContext = React.createContext(theme.dark);

export default App;
