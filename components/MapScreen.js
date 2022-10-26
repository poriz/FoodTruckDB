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

    return (
        <View style={styles.Container}>
          <View style={{flex: 0.3}}/>
         <MapView 
          style={styles.Case1}
          // provider={PROVIDER_GOOGLE}
          // initialRegion={{
          //   latitude: this.latitude,
          //   longitude: this.longitude,
          //   latitudeDelta: 0.005,
          //   longitudeDelta: 0.005
          // }}
          />
        <StatusBar style = "auto"/>
        </View>
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