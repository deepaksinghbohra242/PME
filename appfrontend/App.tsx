import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/Navigation/LoginStack';
import axios from 'axios';

axios.defaults.baseURL = "https://f2f0-157-119-83-177.ngrok-free.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
}

export default App; 
