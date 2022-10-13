import React,{useRef, useState} from 'react';
import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SCREEN_WIDTH = Dimensions.get("window").width;

const BookMark = (navigation) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

const navigationView = () => (
  <View style={styles.menu}>
    <View flexDirection="row">
    <Text style={styles.menufont}>Main</Text>
    <TouchableOpacity style={styles.arrow}>
      <MaterialCommunityIcons name="chevron-right" size={30}/>
    </TouchableOpacity>
    </View>
    <View flexDirection="row">
    <Text style={styles.menufont}>Calendar</Text>
    <TouchableOpacity style={styles.arrow}>
      <MaterialCommunityIcons name="chevron-right" size={30}/>
    </TouchableOpacity>
    </View>
    <View flexDirection="row">
    <Text style={styles.menufont}>BookMark</Text>
    <TouchableOpacity style={styles.arrow}>
      <MaterialCommunityIcons name="chevron-right" size={30}/>
    </TouchableOpacity>
    </View>
    <View flexDirection="row">
    <Text style={styles.menufont}>Setting</Text>
    <TouchableOpacity style={styles.arrow}>
      <MaterialCommunityIcons name="chevron-right" size={30}/>
    </TouchableOpacity>
    </View>
  </View>
);

 return(
  <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition={drawerPosition}
    renderNavigationView={navigationView}
    >
    <View style={styles.Container}>
      <View style={styles.Case1}>
        <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
        <MaterialCommunityIcons style={styles.icon} name="menu" size={30} color="white"/>
        </TouchableOpacity>
        <Text style={styles.Favorite}>BookMark</Text>
      </View>
      <View style={styles.Case2}>
        <ScrollView>
          <View style={styles.FoodTruck}>
              <View style= {styles.row}>
                <Text style={styles.searchList}>FoodTruckName</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="delete-outline" size={30} color="black"/>
                </TouchableOpacity>
              </View>
              <Text style={styles.Location}>FoodTruckLocation</Text>
              <Text style={styles.textRegister}> ────────────────────────────────────</Text>
          </View>
        </ScrollView>
      </View>
     </View>
   </DrawerLayoutAndroid>
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
    backgroundColor: "#222222"
  },
  Case2: {
    flex: 9,
    backgroundColor: "white"
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