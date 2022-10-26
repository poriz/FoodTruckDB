import React, { Component } from 'react'
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
  TextInput,
  
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import MapView,{Marker, PROVIDER_GOOGLE, MAP_TYPES} from 'react-native-maps';

const Stack = createNativeStackNavigator();

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function App  ()  {
  
  const [imgActive, setimgActive] = useState(0);
  const [FTname, setName] = useState ('');
  const [FTinfo, setInfo] = useState('');
 
  return (
    <View style={styles.container}>
      <View style={styles.header}/>

      <MapView style={{ flex: 6}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
      
      <View>
         <TextInput style={styles.inputFT} 
         placeholder='FoodTruck Name'   
         onChangeText={(val) => setName(val)}/>
         <Text style={styles.text}>
            {FTname}
        </Text>
      </View>
        
      <View>  
      <TextInput style={styles.inputinfo} 
         placeholder='FoodTruck Info'   
         onChangeText={(val) => setInfo(val)}/>
        <Text style={styles.text2}>
           {FTinfo}
        </Text>
      </View> 

      <View style={styles.menu}>
        <ScrollView horizontal={true} pagingEnabled={false} showsHorizontalScrollIndicator={true}>
          <View style={styles.firstView}>
            
            <Image
                style={{width : 300, height :'100%'}}
                
                />
            
          </View>

          <View style={styles.secondView}>
          <Image
                style={{width : 300, height :'100%'}}
                //source={require ('../assets/hamburger.png')}
                />
          </View>

          <View style={styles.thirdView}>
          <Image
                style={{width : 300, height :'100%'}}
                //source={require ('../assets/taco.png')}
                />
            
          </View>

          <View style={styles.forthView}>
          <Image
                style={{width : 300, height :'100%'}}
                //source={require ('../assets/stake.png')}
                />
          </View>
        </ScrollView>
      </View>

    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    flex: 0.3,
    width : SCREEN_WIDTH,
    height: '10%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent : 'center',
    marginTop: 20,
  },
  square1 : {
    marginTop: 10,
    width: '100%',
    height : 30,

  },
  boxContainer: {
    width :'100%',
    height: '40%' ,
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
  text: {
    fontSize: 30,
  },
  text2: {
    fontSize: 15,
  },
  text3: {
    fontSize: 20,
  },
  firstView: {
    width: deviceWidth,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  secondView: {
    width: deviceWidth,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  thirdView: {
    width: deviceWidth,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  forthView: {
    width: deviceWidth ,
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  menu: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 100,
    color: 'white',
    fontWeight: "bold"
  },

  inputFT : {
    borderwidth: 1,
    borderColor : '#ccccc',
    padding: 5,
    width: SCREEN_WIDTH,
    backgroundColor: "#7FFFD4"
  },
  
  inputinfo : {
    borderwidth : 1,
    borderColor : '#ccccc',
    padding : 5,
    width : SCREEN_WIDTH,
    maginTop: -10,
    backgroundColor: "#AFEEEE"

  }

});
