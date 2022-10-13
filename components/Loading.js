import React from "react";
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
    TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo'
import {render} from 'react-dom';

export default class Loading extends React.Component{
    render(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Come on FoodTruck!</Text>
        <Entypo name = "rocket" size={30}/> 
        </View>
      );
    }
}