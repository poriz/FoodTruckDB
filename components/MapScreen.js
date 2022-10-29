import * as Location from 'expo-location';

import React,{Component, useEffect, useState,} from 'react';

import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';
import { StatusBar} from 'expo-status-bar';

import { MaterialCommunityIcons, Feather,} from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapView,{Marker, PROVIDER_GOOGLE, MAP_TYPES} from 'react-native-maps';

const SCREEN_WIDTH = Dimensions.get("window").width;

const MapScreen = ({navigation,route}) =>{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude);
      setLocation(location.coords);

    })();

  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

    return (
      <>
      <View style={styles.Container}>
        <MapView
          style={styles.Case1}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          showsUserLocation={true}
          
          mapPadding={{top:0, right:0, left:0, bottom:230}}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
      </View>
      </>
    );
  }

const styles = StyleSheet.create({
  Container: {
    flex:1, 
  },
  Case1: {
    flex: 9,
  },
});

export default MapScreen;