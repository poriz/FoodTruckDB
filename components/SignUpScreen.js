import React, { Component,useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View,TouchableOpacity,Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, 
  createUserWithEmailAndPassword,onAuthStateChanged ,
  updateProfile 
} from "firebase/auth";
import { getDatabase, ref, onValue, set } from 'firebase/database';
import {app} from '../config/keys'

const auth = getAuth(app);
const Stack = createNativeStackNavigator();


export default function  SignUpScreen({navigation}) {
  
  const updateUser= () => {
    updateProfile(auth.currentUser, {
      photoURL: "user"
    }).then(() => {
      console.log("text:")
      console.log(auth.currentUser)
    }).catch((error) => {
      // An error occurred
      // ...
    });
    
  }

  const [value,setValue] = useState({
    ID:"",
    PW:"",
    error:""
  })

  const {
    ID,PW
} = value

const onChange = (keyvalue, e) => {
  setValue({
    ...value, 
    [keyvalue]: e 
  });
};
  async function signUp() {
    if (value.ID === '' || value.PW === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.ID, value.PW)    
      updateUser()
      Alert.alert('SignIn','success!')
    
      navigation.reset({
        index:0,
        routes:[
          {name:'login',
          user_pid: auth.currentUser.uid,
          userinfo: auth.currentUser.photoURL
        },
        ],
      })
      
      
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      },
      console.log(error)
      )
    }
  }


    return(
    <View style = {styles.container}>
        <View style ={styles.bodyContainer}>
        <TextInput
          style = {styles.textInput}
          onChangeText = {(e)=>onChange("ID",e)}
          value = {ID}
          placeholder= 'E-mail'/>
        <TextInput
          style = {styles.textInput}
          onChangeText = {(e)=>onChange("PW",e)}
          value = {PW}
          placeholder= 'Password'/>
     
        </View>
        <Button style = {styles.buttonstyle} title = "Sign Up" 
          onPress={()=> [signUp()]}/>
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



