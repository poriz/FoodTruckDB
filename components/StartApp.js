import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StartApp = () => {
    return(
        <View style={styles.startView}>
            <Text>Come on!{"\n"} FoodTruck</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    startView:{
        justifyContent: "center",
        alignItems: "center"
     }
});

export default StartApp;