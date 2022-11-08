import React,{Component, useEffect, useState,} from 'react';
import Device from 'expo-device';

import {Button, StyleSheet, Text, Dimensions, View, ScrollView,
  TouchableOpacity, DrawerLayoutAndroid, Alert, Switch, Modal,} from 'react-native';
import { StatusBar} from 'expo-status-bar';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';

import { MaterialCommunityIcons, Feather,} from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Location from 'expo-location';
import Geolocation from 'react-native-geolocation-service';
import MapView,{Marker, PROVIDER_GOOGLE, MAP_TYPES, Polygon} from 'react-native-maps';
import { Platform, PermissionsAndroid } from 'react-native';

import {getAuth,} from 'firebase/auth';
import { getDatabase, ref, child, push, update, 
        set, onValue, query, orderByChild ,orderByKey,
        get } from 'firebase/database';

import {app} from '../config/keys';
import { FirebaseError } from 'firebase/app';

const { witdh, height } = Dimensions.get("window");

const auth = getAuth(app);
// const db = getDatabase();
// const FoodTruckUID = auth.currentUser.uid


// const foodTruckUser = query(ref(db,'FoodTruckInfo/'+ FoodTruckUID), 
//                       orderByChild('FoodTruckInfo'));

const MapScreen = ({navigation}) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(37.5642);
  const [longitude, setLongitude] = useState(127.0016);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [Truckinfo , setInfo] = useState({
    TruckinfoA:"",
    TruckNameA:"",
    lattitudeA:"",
    longtitudeA:"",
  })
  const {
    TruckinfoA, TruckName, lattitudeA, longtitudeA
  } = Truckinfo

  
  const [location2, setLocation2] = useState("");
    
  const [keys2, setkeys2] = useState("")

  function testLA(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'FoodTruckInfo/')).then((snapshot) => {
      if (snapshot.exists()) {
        //console.log(Object.keys(snapshot.val()));
        
        setLocation2(Object.values(snapshot.val()))
        setkeys2(Object.keys(snapshot.val()))
        
        // const marker = () =>{
        for(let i=0 ; i<Object.values(snapshot.val()).length ; i++){
            <MapView.Marker
            title={Object.values(snapshot.val()).TruckNameA}
            coordinate={{
              latitude: Object.values(snapshot.val()).lattitudeA,
              longitude: Object.values(snapshot.val()).longtitudeA
            }}> 
            </MapView.Marker>
          }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );


  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLocation(location.coords);

      testLA();
      
      // await delay(1000)
      // console.log(location2)
    })();
    
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  try{
    var usertype = auth.currentUser.photoURL;
    switch (usertype) {
      case 'seller':
        
        return (
          {testLA},
          <View style={styles.Container}>
            <MapView  
              style={styles.Case1}
              provider={PROVIDER_GOOGLE}
              showsMyLocationButton={true}
              showsUserLocation={true}
              zoomControlEnabled={true}
              moveOnMarkerPress={true}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}>
              
              <Marker
              showCallout
              title={"Food Truck Name"}
              description={"Food Truck Info"}
              coordinate={{
                latitude: latitude,
                longitude: longitude
              }}
              draggable/>
              
                {location2.map((val,i)=>{
                //console.log(val);
                return(
                <Marker
                key={String(val.TruckNameA)+i}
                title={String(val.TruckNameA)}
                description={String(val.TruckinfoA)}
                coordinate={{
                  latitude: Number(val.lattitudeA),
                  longitude: Number(val.longtitudeA),
                }}
                onPress={()=>[console.log('push'),
                navigation.navigate('fdinfo')
                ]
                  }
                />)
              })}

                <View>
                  {isEnabled && 
                    <MapView.Circle
                    center={{
                      latitude:36.6210,
                      longitude:127.2900}}
                    radius={300}
                    fillColor="rgba(20, 255, 161, 0.3)"
                    strokeColor="#6ccad0"/>}
                </View>

              </MapView>

              <View style={styles.toggleSwitch}>
                <TouchableOpacity>
                <Text style={styles.toggleFont}>{isEnabled ? 'Hide Permit Area' : 'Show Permit Area'}</Text>
                </TouchableOpacity>
                <Switch
                  style={styles.switchStyle}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  />
              </View>
          </View>
        );
        case 'user':
          return (
            <View style={styles.Container}>
              <MapView  
                style={styles.Case1}
                provider={PROVIDER_GOOGLE}
                showsMyLocationButton={true}
                showsUserLocation={true}
                zoomControlEnabled={true}
                moveOnMarkerPress={true}
                initialRegion={{
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}>
                  
                <MapView.Marker
                  showCallout
                  title={"Food Truck Name"}
                  description={"Food Truck Info"}
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude
                  }}
                  draggable/>
                </MapView>
                </View>
                );
          default:
            return null;
    }
  } catch(error){

  }
};
  
const styles = StyleSheet.create({
  Container: {
    flex:1, 
    marginTop: 40
  },
  toggleSwitch:{
    flex: 0.5,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
  },
  textBG: {
    backgroundColor: "transparent",
  },
  toggleFont: {
    fontWeight: "500",
    padding: 5.5
  },
  switchStyle: {
    padding: 2
  },
  Case1: {
    flex: 9,
  },
});

export default MapScreen;