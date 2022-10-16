import React,{useCallback, useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid, Settings,  } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from './components/MapScreen';
import BookMark from './components/BookMark';
import CalendarScreen from './components/CalendarScreen';
import SettingsScreen from './components/SettingsScreen';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const BookMarkStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={MapScreen}/>
  </HomeStack.Navigator>
);
const BookMarkStackNavigator = () => (
  <BookMarkStack.Navigator>
    <BookMarkStack.Screen name="BookMark" component={BookMark}/>
  </BookMarkStack.Navigator>
);
const CalendarStackNavigator = () => (
  <CalendarStack.Navigator>
    <CalendarStack.Screen name="Calendar" component={CalendarScreen}/>
  </CalendarStack.Navigator>
);
const SettingsStackNavigator = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
  </SettingsStack.Navigator>
);

const App = () => {
  const home = "Home"

    return(
      <NavigationContainer>
       <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '1B2228',
          tabBarInactiveTintColor: '#C7CDD3',
          headerShown: false,
          tabBarIcon: ({focusd, color, size}) => {
            let iconName;        
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                return(
                  <Feather size={size} name={iconName} color={color}/>
                );
                break;
              case 'Calendar':
                iconName = 'calendar';
                return(
                  <Feather size={size} name={iconName} color={color}/>
                );
                break;
              case 'BookMark':
                iconName = 'heart';
                return(
                  <Feather size={size} name={iconName} color={color}/>
                );
                break;
              default:
                iconName = 'settings';
                return(
                  <Feather size={size} name={iconName} color={color}/>
                );
            }
            return(
              <Feather size={size} name={iconName} color={color}/>
            );
          },
          })}>
          <Tab.Screen name="Home" component={HomeStackNavigator} />
          <Tab.Screen name="BookMark" component={BookMarkStackNavigator} />
          <Tab.Screen name="Calendar" component={CalendarStackNavigator} />
          <Tab.Screen name="Settings" component={SettingsStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  MainFont:{
    fontWeight: "bold",
    fontSize: 20
  },

})
export default App;