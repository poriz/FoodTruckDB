import React from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid, Settings} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import SignUpScreen from './components/SignUpScreen'
import userinfoScreen from './components/userInfo'

const Stack = createStackNavigator();


const App = () => {
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={HomeScreen} options ={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='userinfo' component={userinfoScreen}/>

      </Stack.Navigator>
      </NavigationContainer>

    );
  }

const styles = StyleSheet.create({
  MainFont:{
    fontWeight: "bold",
    fontSize: 20
  },
  StackView:{
    alingItems: "center"
  },
  StackFont:{
    fontWeight: "bold",
    fontSize: 20,
  }
})
export default App;