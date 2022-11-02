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
  getAuth,signOut,updatePassword } from 'firebase/auth';
import {app} from '../config/keys'



var devicewidth = Dimensions.get('window').width;



export default function ProfileSetting ({navigation,route}) {
    const [Email, setMail] = useState ('');
    const [PW, setPassword] = useState('');
    const auth = getAuth(app);
    const user = auth.currentUser;
    const Stack = createNativeStackNavigator();
    
    const changepw=(email)=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            Alert.alert("Password reset email sent!")
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    } 

    
    return (
        
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text1}>Personal Information</Text>
            </View>
            <View style={styles.body}>
                <View>
                    
                    <Text>
                    Email:{auth.currentUser.email}
                    </Text>
                    <TextInput style={styles.row} 
                    placeholder='Password'   
                    onChangeText={(val) => setPassword(val)}
                    value={PW}/>
                    <Text>
                    Changed Password:{PW}
                    </Text>
                    
                </View>
              
            </View>
            <View style={styles.bottom}>
                    <Text style={styles.text2}>
                    If you want to register as a store owner,
                    Please contact us via email at OOO@gmail.com!
                    </Text>

                </View>
            <TouchableOpacity  onPress={() => [console.log(PW),changepw(user,PW)] } >
            <Text style={styles.Submittext}>Submit</Text>
            </TouchableOpacity>
        </View>
    );


};

const styles = StyleSheet.create({
    header:{
        padding : 20,
        flex: 0.2,
        width : 400,
        height: '20%',
        
        alignItems: 'center',
        justifyContent : 'center',
        marginTop: 10,
      },
    container :{
        flex:1,
        
    },
    text1 : {
        fontSize: 30
    },
    row: {
        padding: 18,
        
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      bottom:{
        padding : 20,
        flex: 0.1,
        width : 300,
        height: '30%',
        
        alignItems: 'center',
        justifyContent : 'center',
        marginTop: 20,
      },
      text2 : {
        fontSize: 12
    },
    Submittext: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
      }
});