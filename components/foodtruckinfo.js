import React, { Component, useEffect } from 'react'
import { useState } from 'react'
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
  
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  useIsFocused } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView,{Marker, PROVIDER_GOOGLE, MAP_TYPES, Polygon} from 'react-native-maps';
import {app} from '../config/keys'
import {
  getAuth,
  onAuthStateChanged, 
} from 'firebase/auth';
import { getDatabase, ref, child, push, update, 
  set, onValue, query, orderByChild ,orderByKey,
  get } from 'firebase/database';

  
const auth = getAuth(app);
const today = new Date();
const STORAGE_KEY = '@myfd';
const dummydata = "dummy"

const Stack = createNativeStackNavigator();

var devicewidth = Dimensions.get('window').width;

const App = ({navigation,route}) => {

console.log(route.params.NameA)
const [imgActive, setimgActive] = useState(0);
//여기는 이전 페이지에서 넘겨 받을거임.

//북마크 저장부분
const [working, setWorking] = useState(true);
const [token1, settoken1] = useState("allow");
const [toDos,setToDos] = useState({dummydata})

const[information2, setinformation2] = useState({
  name: route.params.NameA,
  info: route.params.infoA,
  lattitude: route.params.lattitudeA,
  longtitude: route.params.longtitudeA,
})

const [menuA,setmenu] = useState(Object.values(route.params.menu))

console.log(menuA)


const [addfd,setaddfd] = useState({
    name: information2.name,
    info: information2.info
})
 const{
    name,info
 } = addfd

 const work = () => setWorking(true);

 const saveTodos = async(toSave) =>{
  const s =JSON.stringify(toSave)
  await AsyncStorage.setItem(STORAGE_KEY,s)
}
const deleteWork = async(key) =>{
  const newToDos = {...toDos}
  delete newToDos[key]
  setToDos(newToDos)
  await saveTodos(newToDos)
}
const loadTodos = async() => {
  const s = await AsyncStorage.getItem(STORAGE_KEY)
  s !== null ? setToDos(JSON.parse(s)) : null;
  
}
const [checkToken,setcheckTocken] = useState(true)

const isFocused = useIsFocused();
    useEffect(() => {
      if (isFocused) console.log('Focused!!');
      loadTodos()
    }, [isFocused]
    );

//중복을 해결 못함. 시간 없어서 다음걸로 넘어감
const addWork = async() =>{
  if(Object.keys(toDos).map((key) => ((toDos[key].token1) == "allow"))){
    settoken1("deied")
    const newToDos = Object.assign({},toDos, {[Date.now()]:{addfd,working,token1}});
    setToDos(newToDos);
    await saveTodos(newToDos)
    console.log('saved')
    Alert.alert('You have been followed!')
 
  }
  else if (Object.keys(toDos).map((key) => ((toDos[key].token1) == "deied"))){
    Alert.alert('Already exist')
  }
  

};
 
  return (
    <SafeAreaView style={styles.container}>
        
        <MapView style={{ flex: 0.8}}
              showsMyLocationButton={true}
              showsUserLocation={true}
               initialRegion={{
                 latitude:information2.lattitude,
                 longitude:information2.longtitude,
                 latitudeDelta: 0.5,
                 longitudeDelta: 0.5,
               }}>
        </MapView>
      <View style={styles.flexbox}>

         <Text style={styles.text}>
           {addfd.name}
        </Text>

        <TouchableOpacity>
              <MaterialCommunityIcons name="heart" size={40} 
              onPress={() => addWork() }/>
        </TouchableOpacity>
      </View>
        
      <View>  
        <Text style={styles.text2}>
            {addfd.info}
        </Text>
      </View> 

      <View style={styles.menus}>
        <ScrollView>
        { 
          menuA.map((val,i)=>{
            return(
              <View style={styles.firstView}>
            <Text style={styles.headerText}>{val}</Text>
            </View>
            )
          })
        }


        </ScrollView>
      </View>

    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
  header:{
    width : '100%',
    height: '10%',
    backgroundColor:  '#3399FF',
    alignItems: 'center',
    justifyContent : 'center'
  },
  square1 : {
    width: '100%',
    height : 30,

  },
  boxContainer: {
    width :'100%',
    height: '50%' ,
    backgroundColor : '#ffffff',
    flexDirection : 'row',
    flexWrap: 'wrap'
  },
  box : {
    width :'100%',
    height: '100%',
    
    backgroundColor : '#cccccc',
    alignItems: 'center',
    justifyContent : 'center'
  },
  scrollView: {
    width: '100%',
    height : 10,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    
  },
  favoritebox : {
    width :40,
    height : 40,
    position : 'absolute',
    right : 10,
    bottom : 0,
    backgroundColor: '#cccccc',
    
  },
  text: {
    marginLeft:10,
    fontSize: 30,
  },
  text2: {
    marginLeft:5,
    fontSize: 15,
  },
  text3: {
    fontSize: 20,
  },
  firstView: {
    height:100,
    width: deviceWidth,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondView: {
    height:100,
    width: deviceWidth,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  thirdView: {
    height:100,
    width: deviceWidth,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  forthView: {
    height:100,
    width: deviceWidth ,
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  menus: {
    width:deviceWidth,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  headerText: {
    fontSize: 20,    
    color: 'white',
    fontWeight: "bold"
  },
  flexbox: {
    flexDirection: "row"
  },

});
export default App;