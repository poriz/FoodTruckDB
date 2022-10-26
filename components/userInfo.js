//this page is used to testing realtime database

import React from "react";
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
    TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { Alert } from "react-native";


export default function userinfo({navigation,route}) {
    
       
    function storeHighScore(userId, score) {
        const db = getDatabase();
        const reference = ref(db, 'administrators/' + userId);
        set(reference, {
          highscore: score,
        });
        console.log(userId)
        
      }
    function setupHighscoreListener(userId) {
        const db = getDatabase();
        const reference = ref(db, 'users/' + userId);
        onValue(reference, (snapshot) => {
          const highscore = snapshot.val().highscore;
          console.log("New high score: " + highscore);
        });
      }
      function alertUid(route_p){
        console.log(route_p)
      }

    return(
        <View>
            <TouchableOpacity style = {styles.textInput}
                onPress={() => {storeHighScore(route.user_pid,123)}}>
                <Text>전송</Text>
                
            </TouchableOpacity>
        </View>
      )
}
const styles = StyleSheet.create({
    textInput: {
        marginVertical:200,
        marginHorizontal:180,
        backgroundColor:"lightblue"
      },
})