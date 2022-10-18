import React, { Component,memo,useEffect,useState } from 'react';

import { format,getDay } from "date-fns";
import { StyleSheet, Text, TextInput, View,TouchableOpacity,ScrollView,Modal,KeyboardAvoidingView, TimePickerAndroid} from 'react-native';
import { createStackNavigator  } from '@react-navigation/stack';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


const Stack = createStackNavigator();
const today = new Date();
const nowdays = today.getDate();
const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
const nowweeks = week[today.getDay()];

const STORAGE_KEY = '@toDos';
const dummydata = "dummy"
export default  function CalendarView() {
    const [days,setdays] = useState(nowdays)
    const [weeks,setweeks] = useState(nowweeks)
    const [modalVisible, setModalVisible] = useState(false);

    const [datekey, setdatekey] = useState("")
    const [toDos,setToDos] = useState({dummydata})
    const [addtitles,setaddtitles] = useState({
        titles:"",
        locations:"",
        memos:""
    })
    const {
        titles,locations,memos
    } = addtitles
    
   

    const onChange = (keyvalue, e) => {
        setaddtitles({
          ...addtitles, 
          [keyvalue]: e 
        });
      };
    
    const saveTodos = async(toSave) =>{
        const s =JSON.stringify(toSave)
        await AsyncStorage.setItem(STORAGE_KEY,s)
    }
    const loadTodos = async() => {
        const s = await AsyncStorage.getItem(STORAGE_KEY)
        s !== null ? setToDos(JSON.parse(s)) : null;
    }
    useEffect(() => {
        loadTodos();
    }, []
    );

    const addWork = async() =>{
        const newToDos = Object.assign({},toDos, {[Date.now()]:{addtitles,datekey}});
        setToDos(newToDos);
        await saveTodos(newToDos)
        setaddtitles("","","")
    };

    const deleteWork = async(key) =>{
        const newToDos = {...toDos}
        delete newToDos[key]
        setToDos(newToDos)
        await saveTodos(newToDos)
    }

    console.log(STORAGE_KEY)
    


    return (
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
                    <View>
                    <TextInput
                        placeholder='제목'
                        style = {styles.textInputBox}
                        onChangeText = {(e)=>onChange("titles",e)}
                        value={titles}
                        returnKeyType='next'

                    />
                    <TextInput
                        placeholder='장소'
                        style = {styles.textInputBox}
                        onChangeText = {(e)=>onChange("locations",e)}
                        value={locations}
                        returnKeyType='next'

                    />
                    <TextInput
                        placeholder='메모'
                        style = {styles.textInputBox}
                        onChangeText = {(e)=>onChange("memos",e)}
                        value={memos}

                    />
                    
                    <View style={styles.buttonstyles}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {setModalVisible(!modalVisible), addWork()}}>
                            <Text style={styles.textStyle}>저장</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        <View style={styles.calendarView}>
            <Calendar 
            style={styles.calendar} 
            onDayPress={day => {
                setdays(day.day)
                const daysforweek = new Date(day.dateString);
                setweeks(week[getDay(daysforweek)]);
                setdatekey(day.day)
              }}
            />
        </View>
        <View style = {styles.ToDayInfoStyle} >
            <View style = {styles.InfoTextBox}>
            <Text style={styles.daystyle}>{days}</Text>
            <Text style= {styles.weekstyle}>{weeks}</Text>
            </View>
            <TouchableOpacity style={styles.plusbutton} onPress={() => [setModalVisible(true)]}>
                <AntDesign name="plus"  size={25} color="black" />
            </TouchableOpacity>
            
        </View>
        
        <ScrollView>
            {
            Object.keys(toDos).map((key) => toDos[key].datekey === datekey ?(
            <View key = {key} style = {styles.eventcontainerView} >
                <View style = {styles.addDeletecontainer}>
                    <Text style = {styles.eventTitle}>{toDos[key].addtitles.titles}</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteWork(key)}>
                        <AntDesign name="delete" size={18} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style = {styles.eventContents}>{toDos[key].addtitles.memos}</Text>
                <Text style = {styles.eventLocation}>{toDos[key].addtitles.locations}</Text>
            </View>)
                : null
            )
}
        </ScrollView>

        </View>

    );
};


const styles = StyleSheet.create({
    calendarView:{
        marginTop: 80,
    },
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    ToDayInfoStyle:{
        flexDirection:'row',
        padding:5,
        marginHorizontal:15,
        borderBottomColor:'black',
        borderBottomWidth:1,
        justifyContent:'space-between'
        
    },
    InfoTextBox:{
        flexDirection:'row',
    },
    daystyle:{
        fontSize:30,
    },
    weekstyle:{
        fontSize:13,
        marginTop:17,
        marginLeft:5,
        
    },
    plusbutton:{
        paddingTop:10
    },
    modalView:{
        flex:1,
        backgroundColor:'white',
        marginVertical:150,
        marginHorizontal:30,
        elevation: 2,
        
    },
    textInputBox:{
        marginTop:20,
        marginHorizontal:10,
        paddingHorizontal:5,
        borderBottomColor:'black',
        borderBottomWidth:1,
    },
    buttonstyles:{
        marginVertical:10,
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:80
    },
    eventcontainerView: {
        backgroundColor: 'lightgray',
        marginTop:10,
        marginHorizontal: 20,
        borderColor:'black',
        borderBottomWidth:1,
      },

      deleteButton:{

      },
      addDeletecontainer:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:5,
        marginTop:3
      },

      eventTitle:{
        fontSize:18,
      },
      eventContents:{
        fontSize:13,
        paddingHorizontal:6,

      },
      eventLocation:{
        fontSize:10,
        paddingHorizontal:6,


      },
      textstyle:{
        color:'black'
      }
})
