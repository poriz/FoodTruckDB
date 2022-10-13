import React,{useCallback, useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from './components/MapScreen';
import BookMark from './components/BookMark';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Loading from './components/Loading';

SplashScreen.preventAutoHideAsync();


const Stack = createNativeStackNavigator();
const Tab = creacteBottomTabNavigator();

function LogoTitle() {
  return (
    <View>
      <Text style={styles.MainFont}>Main</Text>
    </View>
  )
}
function BookMarkTitle(){
  return (
    <View>
      <Text>BookMark</Text>
    </View>
  )
}

export default function App(){

  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare(){
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch(e){
        console.warn(e);
      }finally{
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () =>{
    if (appIsReady){
      await SplashScreen.hideAsync
    }
  }, [appIsReady]);

    if (!appIsReady){
      return null;
    }

    return(
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MapScreen} />
        <Tab.Screen name="BookMark" component={BookMark} />
        {/* <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  MainFont:{
    fontWeight: "bold",
    fontSize: 20
  },

})