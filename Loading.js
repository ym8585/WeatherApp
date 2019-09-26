import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My First Weather App</Text>
        <Image
          style={{width:'100%'}}
          source={require('./img.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    
    
  },
  text: {
    color: "#2c2c2c",
    fontSize: 40
  },

});
