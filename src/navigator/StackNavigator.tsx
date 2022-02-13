import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LoginScreen} options={{cardShadowEnabled:true, title:"Je", headerShown:false}} />
      <Stack.Screen name="Home2" component={SignInScreen} options={{cardShadowEnabled:true, title:"Access", headerShown:false, headerStyle:{backgroundColor:'#009387'}}} />
      <Stack.Screen name="Home3" component={SignUpScreen} options={{cardShadowEnabled:true, title:"Register", headerShown:false, headerStyle:{backgroundColor:'#009387'}}} />
      <Stack.Screen name="Home4" component={HomeScreen} />
    </Stack.Navigator>
  );
}
export default StackNavigator;