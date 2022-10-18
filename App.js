import React,{useCallback, useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid, Settings} from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();


const App = () => {
  

    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
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