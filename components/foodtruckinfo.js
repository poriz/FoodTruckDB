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
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

var devicewidth = Dimensions.get('window').width;

const App = () => {
  const [imgActive, setimgActive] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style = {styles.square1}>
           <MaterialCommunityIcons name="menu" size={40} color="black" 
            onPress={() => Alert.alert('drawer') }/>
        </View>
        <Text>Ecommerce</Text>
      </View>

      <View style={styles.boxContainer}> 
        <View style={styles.box}>
          <View style= {styles.favoritebox}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="heart" size={40} 
              onPress={() => Alert.alert('You have been followed!') }/>
            </TouchableOpacity>
          </View>
          <Text>지도 </Text>
        </View>
      </View>
      
      <View>
         <Text style={styles.text}>
           food truck Name
        </Text>
      </View>
        
      <View>  
        <Text style={styles.text2}>
            food truck info
        </Text>
      </View> 

      <View style={styles.menu}>
        <ScrollView horizontal={true} pagingEnabled={false} showsHorizontalScrollIndicator={true}>
          <View style={styles.firstView}>
            <Text style={styles.headerText}>First Menu</Text>
          </View>

          <View style={styles.secondView}>
            <Text style={styles.headerText}>Second Menu</Text>
          </View>

          <View style={styles.thirdView}>
            <Text style={styles.headerText}>Third Menu</Text>
          </View>

          <View style={styles.forthView}>
            <Text style={styles.headerText}>Forth Menu</Text>
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
    backgroundColor: '#cccccc'
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
    flex: 2,
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

});
export default App;