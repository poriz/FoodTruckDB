import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjBfMjY4%2FMDAxNjQ1Mjk5Nzc2Mjg2.pzyiS5-tXZYmGvpnR1xGOyaO7lfd2M1vCO-qDlxowbQg.wzX3zzmvL_-4PxIED5x46fd3-COb7cU0oTM6c3KL3O0g.JPEG.zxc7421%2F44884218_345707102882519_2446069589734326272_n.jpg&type=sc960_832'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity onPress={()=> console.log("pressed")} style={styles.buttonContainer2}>
               <Text> User </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> console.log("pressed")} style={styles.buttonContainer}>
                <Text> 프로필 사진 변경 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> console.log("pressed")}  style={styles.buttonContainer}>
                <Text> 개인정보 변경</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> console.log("pressed")} style={styles.buttonContainer}>
                <Text> 회원탈퇴 </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> console.log("pressed")} style={styles.buttonContainer}>
                <Text> 가게 정보 </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#cccccc",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop: 50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#cccccc",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#cccccc",

  },
  buttonContainer2: {
      marginTop:1,
      height:20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:200,
      borderRadius:30,
      backgroundColor: "#cccccc",

    },
});