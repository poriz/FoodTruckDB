import React,{useCallback, useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid, Settings,  } from 'react-native';
import { MaterialCommunityIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from '../components/MapScreen';
import BookMark from '../components/BookMark';
import CalendarScreen from '../components/calendarScreen';
import SettingsScreen from '../components/profilescreen';
import {app} from '../config/keys'
import {
  getAuth,
  onAuthStateChanged, 
} from 'firebase/auth';

const auth = getAuth(app);

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const BookMarkStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const HomeStackNavigator = ({navigation,route}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HOME" component={MapScreen}
    options={{
      headerShown: false,
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text>{children}</Text>
        </View>
      ),
    }}/>
  </HomeStack.Navigator>
);
const BookMarkStackNavigator = () => (
  <BookMarkStack.Navigator>
    <BookMarkStack.Screen name="BOOKMARK" component={BookMark}
    options={{
      headerShown: false,
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text>{children}</Text>
        </View>
      ),
    }}/>
  </BookMarkStack.Navigator>
);
const CalendarStackNavigator = () => (
  <CalendarStack.Navigator>
    <CalendarStack.Screen name="CALENDAR" component={CalendarScreen}
    options={{
      headerShown: false,
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text>{children}</Text>
        </View>
      ),
    }}/>
  </CalendarStack.Navigator>
);
const SettingsStackNavigator = ({navigation,route}) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="SETTINGS" component={SettingsScreen}
    options={{
      headerShown: false,
      headerTransparent: 'True',
      headerBackground:() =>{
    },
      headerTitle: ({children}) => (
        <View>
          <Text>{children}</Text>
        </View>
      ),
    }}/>
  </SettingsStack.Navigator>
);

const HomeScreen = ({navigation,route}) => {
  onAuthStateChanged(auth, user => {
    if (user == null) {
        changePage()
        
    }
    else 
        console.log('logged in')
   });

  const changePage = () => {
      navigation.reset({
        index:0,
        routes:[
          {name:'login',},
        ],
      })

  } 

    return(
      <NavigationContainer independent={true}>
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
export default HomeScreen;