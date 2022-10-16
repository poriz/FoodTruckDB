import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation}){
  return(
    <View>
      <Button
        title = "Login 열기"
        onPress={() => navigation.navigate('Login')}
        />
      <Button
        title = "Sign Up 열기"
        onPress={() => navigation.navigate('SignUp')}
        />
      <Button
        title = "Calendar 열기"
        onPress={() => navigation.navigate('Calendar')}
        />
    </View>
  );
}

export default HomeScreen;
