import React, { Component } from 'react';
import { useState } from 'react';
import {
    StyleSheet,Text,View,
    Image,
    TouchableOpacity,
    Button,
    StatusBar,
    AppRegistry,
    SafeAreaView,
    ScrollView,
    FlatList,
    Alert,
    Dimensions,
    Animated,
    useWindowDimensions,
    deviceWidth,
    Platform,
    TextInput,
    TouchableHighlight,
    changeText
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer,CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import foodtrucksetting from '../components/foodtrucksetting';
import HomeScreen from '../components/HomeScreen';
import {
  getAuth,signOut} from 'firebase/auth';
import {app} from '../config/keys'
import profilescreen from './profilescreen';

var devicewidth = Dimensions.get('window').width;

const Stack = createNativeStackNavigator();




export default function ProfileSetting ({navigation,route}) {
    
    return (
        
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text1}>Personal Information</Text>
            </View>
            <View style={styles.body}>
                <View>
                    <TextInput style={styles.row} 
                    placeholder='Your Name'   
                    />
                    <TextInput style={styles.row} 
                    placeholder='Age'   
                    />
                    <TextInput style={styles.row} 
                    placeholder='E-mail'   
                    /> 
                    
                  

                </View>
            </View>
        </View>
    );

    





};

const styles = StyleSheet.create({
    header:{
        padding : 18,
        flex: 0.1,
        width : 300,
        height: '10%',
        
        alignItems: 'center',
        justifyContent : 'center',
        marginTop: 20,
      },
    container :{
        flex:1,
        padding: 24
    },
    text1 : {
        fontSize: 30
    },
    row: {
        padding: 18,
        
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
      }
});