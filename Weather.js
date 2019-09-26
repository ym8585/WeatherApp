 import React from "react";
 import { View, Text, StyleSheet} from "react-native";
 import PropTypes from "prop-types";
 import { MaterialCommunityIcons } from "@expo/vector-icons";

 export default function Weather ({temp}){
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={70}name="weather-lightning-rainy"/>
            <Text style={styles.temp}>{temp}</Text>
        </View> 
        <View style={styles.halfContainer}/>
    </View>
    );
}

 Weather.PropTypes = {
     temp: PropTypes.number.isRequired,
     condition: PropTypes.oneOf([
         "Thunderstorm", 
         "Drizzle", 
         "Rain", 
         "Snow", 
         "Atmosphere", 
         "Clear", 
         "Clouds",
         "Haze ",
         "Dust",
         "Mist",
        ]). isRequired
    };

 const styles = StyleSheet.create({
     container:{
         flex:1,
         justifyContent: 'center',
         alignItems: 'center',
     },
     temp: {
        fontSize: 32,
     },
     halfContainer: {
         flex: 1,
         justifyContent: "center",
         alignItems: 'center',

     }
 });