import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location'; 
import axios from "axios";
import Weather from "./Weather";

const API_KEY ="b76cd9936814b194f17ff3005fb520b8"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude)=>{
    const { 
      data : {
        main: {temp},
        Weather
      } 
    } = await axios.gest(
      `http://api.openweathermap.org/data/2.5/weaher?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    ); 
    this.setState({
      isLoading: false, 
      condition: Weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
        this.setState({ isLoading: false});
    } catch(error){
      Alert.alert("당신,,,어디있나요,,?");
    }
  };
  componentDidMount(){
    this.getLocation(); 
  } 
  render (){
    const {isLoading, temp, condition } =this.state;
    return isLoading ? (
    <Loading/>)
     : (
     <Weather temp= {temp} condition={condition} /> 
     );
  }
}