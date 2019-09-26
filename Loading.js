import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            My First Weather App
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor:"white",
    justifyContent: 'flex-end',
    alignContent: 'center',
    paddingEnd : 50
},
  text: {
    color: "#2c2c2c",
    fontSize: 40
  },

});
