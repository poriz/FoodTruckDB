import React, {useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View,Alert, Modal, KeyboardAvoidingView, } from 'react-native';
import Checkbox from "expo-checkbox";

import {app} from '../config/keys'
import {
  getAuth,
  onAuthStateChanged,
  parseActionCodeURL,
  signInWithEmailAndPassword,
  signOut, 
} from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';


const auth = getAuth(app);

export default function LoginScreen({navigation}) {

// Listen for authentication state to change.
  onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("Logged in with user: ", user.uid);
        setC_user(user.uid)
        changePage(C_user)
        
    }
    else 
        console.log('Not logged in')
   });
//email connection
  const [C_user,setC_user] = useState()
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

  async function signIn() {
    if (value.ID === '' || value.PW === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.ID, value.PW)
      
      console.log("loged in")
      
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      },
      console.log(error)
      )
    }
  }

  const [agree, setAgree] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const changePage = (C_user1) => {
    if (C_user1 != null){
      navigation.reset({
        index:0,
        routes:[
          {name:'Home',
        user_pid: auth.currentUser.uid,
        userinfo: auth.currentUser.photoURL},
        ],
      })
      //현재 사용 유저의 이메일
      console.log(C_user.email)
    }
  } 
  const signUp = () =>{
    navigation.navigate('SignUp')
  }

    return(
      <View>
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
          <KeyboardAvoidingView 
              behavior = 'height' 
              style={styles.modalView}>
          <View style = {styles.Modalstyle}>
            <TextInput
              style = {styles.textInput}
              onChangeText = {(e)=>onChange("ID",e)}
              value = {ID}
              placeholder= 'ID'/>
            <TextInput
              style = {styles.textInput}
              onChangeText = {(e)=>onChange("PW",e)}
              value = {PW}
              //secureTextEntry={true}
              placeholder= 'password'/>
            
              <Button style = {styles.buttonstyle} title = "signin" onPress={() => [setModalVisible(!modalVisible),signIn()]} />
            </View>
          </KeyboardAvoidingView>
        </Modal>
    </View>

    <View style ={styles.Buttons}>
      <TouchableOpacity style = {styles.signInbutton} 
        onPress={() => [setModalVisible(!modalVisible)]}>
        <Text style={styles.textStyle}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.signOutbutton} 
        onPress={() => [signUp()]}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccccc',
    paddingHorizontal: 0,
    flex: 1,
  },
  Buttons:{
    marginTop:100
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  modalView:{
    flex:1,
    backgroundColor:'white',
    marginVertical:150,
    marginHorizontal:30,
    elevation: 2,
    
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
    alignItems:'baseline',
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
  },
  Modalstyle:{
    margin: 10,
    paddingTop:120
  },
  signInbutton:{
    paddingVertical:5,
    alignItems:'center',
    marginTop: 200,
    backgroundColor:'lightblue',
    marginHorizontal:80,
    height:30
  },
  signOutbutton:{
    paddingVertical:5,
    alignItems:'center',
    backgroundColor:'lightblue',
    marginHorizontal:80,
    height:30
  }
  
})



