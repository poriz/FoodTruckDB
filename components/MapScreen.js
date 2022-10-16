import * as Location from 'expo-location';
import React,{useEffect, useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapView from 'react-native-maps';

const SCREEN_WIDTH = Dimensions.get("window").width;

const MapScreen = ({navigation}) => {
  // const [location, setlocation] = useState();
  // const [ok, setOk] = useState(true);
  // const ask = async() => {
  //   const {granted} = await Location.requestForegroundPermissionsAsync();
  //   if (!granted) {
  //     setOk(false);
  //   }

  //   const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy: 5});
  //   const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps:(false)});
  // };

  //   useEffect(()=> {
  //   ask();
  // });

  return(
      <View style={styles.Container}>
        <View style={styles.Case2}>
          <ScrollView>
            <View>
              <Text style={styles.mainFont}>Main Here!</Text>
                <View style={styles.row}>
                 <TouchableOpacity>
                   <MaterialCommunityIcons name="target" size={30}/>
                 </TouchableOpacity>
                 <TouchableOpacity>
                   <MaterialCommunityIcons name="arrow-expand-all" size={30}/>
                 </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
       </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex:1, 
    marginTop: 30,
  },
  Case1: {
    flex: 1,
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
export default MapScreen;

