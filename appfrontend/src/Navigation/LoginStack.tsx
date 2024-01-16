import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Login/Home';
import Login from '../Login/Login';
import Register from '../Login/Register';
import Welcome from '../Login/Welcome';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name='Dashboard' component={Welcome} />
    </Stack.Navigator>
  );
};

export default LoginStack;
