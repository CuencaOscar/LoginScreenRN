import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
// import Login from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <StackNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;