import React, { useState } from 'react';
import ThemedButton from './ThemedButton';
import { ThemeContext, themes } from './theme-context';

const App = () => {

  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
  }

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemedButton onClick={toggleTheme} >Dynamic Theme</ThemedButton>
      </ThemeContext.Provider>
      <ThemedButton onClick={toggleTheme}>Default Theme</ThemedButton>
    </div>
  );
}


export default App;
