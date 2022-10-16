import * as Location from 'expo-location';

import React,{Component, useEffect, useRef, useState,} from 'react';

import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';
import { StatusBar} from 'expo-status-bar';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapView,{Marker, PROVIDER_GOOGLE, MAP_TYPES} from 'react-native-maps';

const SCREEN_WIDTH = Dimensions.get("window").width;

export default class MapScreen extends React.Component{
  
  render() {
    return (
      <View style={styles.Container}>
       <MapView style={styles.Case1}
       initialRegion={{
       latitude : 35.91395373474155,
       longitude : 127.73829440215488,
       latitudeDelta : 5,
       longitudeDelta : 5,
       }}/>
       <StatusBar style = "auto"/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  Container: {
    flex:1, 
  },
  Case1: {
    flex: 9,
    padding: 2,
    backgroundColor: "#222222"
  },
  Case2: {
    flex: 9,
    backgroundColor: "white"
  },
  mainFont:{
    marginTop: 200,
    marginLeft: 100
  },
  Favorite:{
    fontSize: 20,
    color: "white",
    marginLeft :50,
    marginTop: -30
  },
  button:{
    color: "#222222",
  },
  icon: {
    marginLeft: 10,
    marginTop: 20,
  },
  row: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginRight: 20,
  },
  FoodTruck: {
    marginTop :10,
    marginLeft: 10,
    padding : 2,
    width : SCREEN_WIDTH,
  },
  searchList:{
    fontSize:25,
    fontWeight: "500"
  },
  Location:{
    fontSize: 15,
    fontWeight:"500",
    opacity : 0.5,
    marginLeft: 10
  },
  menu:{
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30
  },
  menufont:{
    fontSize: 25,
    fontWeight: "500"
  },
  arrow:{
    marginTop: 5,
  }
});
