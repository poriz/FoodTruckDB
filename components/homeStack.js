import React,{useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookMark from './BookMark';
import MapScreen from './MapScreen';

const Stack = createNativeStackNavigator();

function homeStack({navigation}){
  return(
    <View>
      <Button
        title = "Login 열기"
        onPress={() => navigation.navigate('Login')}
        />
      <Button
        title = "Sign Up 열기"
        onPress={() => navigation.navigate('SignUp')}
        />
      <Button
        title = "Calendar 열기"
        onPress={() => navigation.navigate('Calendar')}
        />
    </View>
  );
}

export default homeStack;