import { StatusBar } from 'expo-status-bar';

import React, {
  useState,
} from 'react';

import BottomNav from './components/BottomNav';
import Routes from './routes/routes';



const App = () => {
  return (
   <Routes />
  );
}

export default App;
