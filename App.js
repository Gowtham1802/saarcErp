import React from 'react';
import StackNavigator from './src/navigation/stackNavigation/StackNavigator';
import {ThemeProvider} from './src/utils/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};

export default App;
