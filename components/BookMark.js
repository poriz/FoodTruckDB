import React,{useRef, useState,useEffect} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SCREEN_WIDTH = Dimensions.get("window").width;
const STORAGE_KEY = '@myfd';
const dummydata = "dummy"

const BookMark = ({navigation}) => {
    const [working, setWorking] = useState(true);
    const [toDos,setToDos] = useState({dummydata})
    const [addfd,setaddfd] = useState({
        name:"",
        info:""
    })
    const {
        name,info
    } = addfd
    const work = () => setWorking(true);

    const onChange = (keyvalue, e) => {
      setaddfd({
          ...addfd, 
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
    const isFocused = useIsFocused();

 
    useEffect(() => {
      if (isFocused) console.log('Focused!!');
      loadTodos()
    }, [isFocused]
    );



    const deleteWork = async(key) =>{
        const newToDos = {...toDos}
        delete newToDos[key]
        setToDos(newToDos)
        await saveTodos(newToDos)
    }

    console.log(STORAGE_KEY)
    




 return(
    <View style={styles.Container}>
      <View style={styles.Case2}>
      <View style={styles.FoodTruck}>
              <View style= {styles.row}>
                <Text style={styles.searchList}>BookMarks</Text>
              </View>
              <Text style={styles.textRegister}> ────────────────────────────────────</Text>
          </View>
        <ScrollView>
        {Object.keys(toDos).map((key) => (toDos[key].working === working)?(
            <View key = {key} style = {styles.FoodTruck} >
                <View style = {styles.row}>
                    <Text style = {styles.searchList}>{toDos[key].addfd.name}</Text>
                    <TouchableOpacity onPress={() => deleteWork(key)}>
                    <MaterialCommunityIcons name="delete-outline" size={30} color="black"/>
                    </TouchableOpacity>
                </View>
                <Text style = {styles.Location}>{toDos[key].addfd.info}</Text>
            </View>)
                : null
            )
}

        </ScrollView>
      </View>
     </View>
  );

 };
    
const styles = StyleSheet.create({
  Container: {
    flex:1, 
    marginTop: 30,
  },
  Case1: {
    flex: 1,
    padding: 2,
  },
  Case2: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20
  },
  Favorite:{
    fontSize: 20,
    color: "white",
    marginLeft :50,
    marginTop: -30
  },
  button:{
    color: "#222222",
  },
  icon: {
    marginLeft: 10,
    marginTop: 20,
  },
  row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginRight: 20
  },
  FoodTruck: {
    marginTop :10,
    marginLeft: 10,
    padding : 2,
    width : SCREEN_WIDTH,
  },
  searchList:{
    fontSize:25,
    fontWeight: "500"
  },
  Location:{
    fontSize: 15,
    fontWeight:"500",
    opacity : 0.5,
    marginLeft: 10
  },
  menu:{
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30
  },
  menufont:{
    fontSize: 25,
    fontWeight: "500"
  },
  arrow:{
    marginTop: 5,
  }
});   
export default BookMark;