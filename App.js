import React,{useCallback, useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid, Settings} from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from './components/MapScreen';
import BookMark from './components/BookMark';
import CalendarScreen from './components/calendarScreen';
import profilescreen from './components/profilescreen';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const BookMarkStack = createNativeStackNavigator();
const CalendarStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();


const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={MapScreen}
    options={{
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text style={styles.StackFont}>{children}</Text>
        </View>
      ),
    }}/>
  </HomeStack.Navigator>
);
const BookMarkStackNavigator = () => (
  <BookMarkStack.Navigator>
    <BookMarkStack.Screen name="BookMark" component={BookMark}
    options={{
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text style={styles.StackFont}>{children}</Text>
        </View>
      ),
    }}/>
  </BookMarkStack.Navigator>
);
const CalendarStackNavigator = () => (
  <CalendarStack.Navigator>
    <CalendarStack.Screen name="Calendar" component={CalendarScreen}
    options={{
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text style={styles.StackFont}>{children}</Text>
        </View>
      ),
    }}/>
  </CalendarStack.Navigator>
);
const SettingsStackNavigator = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={profilescreen}
    options={{
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text style={styles.StackFont}>{children}</Text>
        </View>
      ),
    }}/>
  </SettingsStack.Navigator>
);

const App = () => {
  const home = "Home"

    return(
      <NavigationContainer>
       <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#1B2228',
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
  StackView:{
    alingItems: "center"
  },
  StackFont:{
    fontWeight: "bold",
    fontSize: 20,
  }
})
export default App;