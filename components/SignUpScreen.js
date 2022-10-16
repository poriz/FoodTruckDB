import React, { Component,useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function  SignUpScreen({navigation}) {
  const [userID,setUserID] = useState('');
  const [userPW,setUserPW] = useState('')
  const [checkpw, setCheckPW] = useState('')
  const [agree, setAgree] = useState(false);

    return(
    <View style = {styles.container}>
        <View style ={styles.bodyContainer}>
        <TextInput
          style = {styles.textInput}
          onchangeText = {(userID) => setUserID(userID)}
          placeholder= 'UserName'/>
        <TextInput
          style = {styles.textInput}
          onchangeText = {(userPW) => setUserPW(userPW)}
          placeholder= 'Password'/>
        <TextInput
          style = {styles.textInput}
          onchangeText = {(checkpw) => setCheckPW(checkpw)}
          placeholder= 'Confirm Password'/>
          <View style={styles.alreadystyle}>
          <Text>Already have an account? </Text>
          <TouchableOpacity 
          style={styles.siginstyle}
          onPress={() => navigation.navigate('Login')}
          >
            <Text style = {styles.signinstyle}>Sign In</Text>
          </TouchableOpacity>
          </View>
        
        </View>
        <Button style = {styles.buttonstyle} title = "Sign Up" />
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
    marginTop: 260,
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
  alreadystyle:{
    alignSelf:'center',
    marginTop:30,
    flexDirection:'row',
    
  },
  signinstyle:{
    color:"blue"
  },
})



