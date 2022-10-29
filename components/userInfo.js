//this page is used to testing realtime database

import React, { useState } from "react";
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
    TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';
import { getDatabase, ref, child, push, update,set,onValue } from 'firebase/database';
import { Alert } from "react-native";
import {app} from '../config/keys'
import {getAuth,} from 'firebase/auth';

const auth = getAuth(app);

export default function userinfo({navigation,route}) {
    
    const C_user_uid = auth.currentUser.uid
    const [Truckinfo , setInfo] = useState({
      TruckinfoA:"",
      TruckNameA:"",
      lattitudeA:"",
      longtitudeA:"",
    })
    const{
      TruckinfoA,TruckName,lattitudeA,longtitudeA
    } = Truckinfo

    function FoodtruckinfoListener() {
      //FoodTruckUID에 푸드트럭의 uid를 삽입한다.
      const FoodTruckUID = auth.currentUser.uid
        const db = getDatabase();
        const reference = ref(db, 'FoodTruckInfo/' + FoodTruckUID);
        onValue(reference, (snapshot) => {
          setInfo({...Truckinfo,
            TruckinfoA : snapshot.val().TruckInfoA,
            TruckNameA : snapshot.val().TruckNameA}) ;        
          
        });
      }
      
      function FoodTruckInfoUpdate(info){
        const db = getDatabase();
        const FoodTruckUID = auth.currentUser.uid

        setInfo({...Truckinfo,
          TruckNameA : "testinfoABCD"
          })
          setInfo({...Truckinfo,
            TruckinfoA : "testinfoA11"
          })
        console.log(Truckinfo)
        //아래는 나중에 데이터를 입력받아서 변경시에 사용할것.
        //const onChange = (keyvalue, e) => {
          //setValue({
           // ...value, 
           // [keyvalue]: e 
          //});
     //   };
          //예시
          // onChangeText = {(e)=>onChange(TruckinfoA,e)}

          // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['FoodTruckInfo/' + FoodTruckUID] = info;

        return update(ref(db), updates);
      }

    return(
        <View>
            <TouchableOpacity style = {styles.textInput}
                onPress={() => {FoodtruckinfoListener()}}>
                <Text>정보받아오기</Text>
                
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.textInput2}
                onPress={() => {[FoodTruckInfoUpdate(Truckinfo)]}}>
                <Text>정보 입력예제</Text>
            </TouchableOpacity>

            <Text>{Truckinfo.TruckNameA}</Text>
            <Text>{auth.currentUser.photoURL}</Text>
        </View>
      )
}
const styles = StyleSheet.create({
    textInput: {
        marginTop:200,
        marginHorizontal:100,
        backgroundColor:"lightblue",
        alignItems:"center"
      },
      textInput2:{
        marginVertical:30,
        marginHorizontal:100,
        backgroundColor:"lightblue",
        alignItems:"center"
      }
})