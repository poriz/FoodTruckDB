import React, { Component,useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View,Alert } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Checkbox from "expo-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';

//login stage
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import * as Facebook from 'expo-facebook';
import firebaseConfig from '../config/keys';

let myApp = initializeApp(firebaseConfig);

const auth = getAuth(myApp);

// Listen for authentication state to change.
onAuthStateChanged(auth, user => {
  if (user != null) 
      console.log("Logged in with user: ", user);
  else 
      console.log('Not logged in')
 });
 
//facebook connection
const handleAuth=async ()=> {
  try {
    await Facebook.initializeAsync({
      appId: '772944797265440',
    });
    const { type, token,expirationDate, permissions, declinedPermissions } = 
    await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile','email'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
} catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
    console.log({message})
}
}



const Stack = createNativeStackNavigator();
export default function  LoginScreen() {


  const [userID,setUserID] = useState('');
  const [userPW,setUserPW] = useState('')
  const [agree, setAgree] = useState(false);

  const handlePress = () => {
    if (!userID) {
      Alert.alert('Email field is required.');
    }

    if (!userPW) {
      Alert.alert('Password field is required.');
    }

    signIn(userID, userPW);
    setUserID('');
    setUserPW('');
  };


  
    return(
    <View style = {styles.container}>
        <View style ={styles.bodyContainer}>
        <TextInput
          style = {styles.textInput}
          value = {userID}
          onchangeText = {(userID) => setUserID(userID)}
          placeholder= 'ID'/>
        <TextInput
          style = {styles.textInput}
          value = {userPW}
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
        <Button style = {styles.buttonstyle} title = "submit" onPress={handleAuth} />
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



