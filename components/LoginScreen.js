import React, { Component,useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkbox from "expo-checkbox";

const Stack = createNativeStackNavigator();


export default function  LoginScreen() {
  const [userID,setUserID] = useState('');
  const [userPW,setUserPW] = useState('')
  const [agree, setAgree] = useState(false);

    return(
    <View style = {styles.container}>
        <View style ={styles.bodyContainer}>
        <TextInput
          style = {styles.textInput}
          onchangeText = {(userID) => setUserID(userID)}
          placeholder= 'ID'/>
        <TextInput
          style = {styles.textInput}
          onchangeText = {(userPW) => setUserPW(userPW)}
          placeholder= 'password'/>
        
        <View style={styles.checkboxstyle}>
        <Checkbox
          value={agree}
          onValueChange={()=> setAgree(!agree)}
          color={agree ? "#4630EB": undefined}     
          />
          <Text style = {styles.Textstyle}>Remember me?</Text>
          <Text style = {styles.Textstyle2}>Forgot Password</Text>
        </View>
        
        </View>
        <Button style = {styles.buttonstyle} title = "submit" />
    </View>

    )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccccc',
    paddingHorizontal: 0,
    flex: 1,
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  bodyContainer: {
    marginTop: 280,
    paddingHorizontal: 20,
    flex: 1
  },
  textInput: {
    backgroundColor: '#DEDEDE',
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
  },
  buttonstyle:{
    alignItems:'stretch',
    flex:1,
    paddingHorizontal: 0,
  },
  circle:{
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  Textstyle:{
    marginLeft:5,
  },
  Textstyle2:{
    marginLeft:120
  },
  checkboxstyle:{
    flexDirection:'row'
  }
})



