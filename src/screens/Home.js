import React, {useState} from 'react'
import {View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import background from '../../assets/images/1540030.jpg'
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

function Home() {

  const [City, setCity] = useState("")
  const [weather, setWeather] = useState({})
  const getWeather = ()=>{ 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=3d5ab8472b7d63620803d4235cfe14a2`).then((response)=>{
        console.log(response.data)
        setWeather(response.data)
    }).catch((error)=> {
        alert("City not exist")
        console.log(error)
    })

  }

  return (
    <ImageBackground source={background} style={styles.image}>
      <SafeAreaView>

        <View style={styles.textInputContainer}>

          <TextInput 
            style={styles.textInput}
            placeholder={"Enter Your City Name"}
            onChangeText={(text)=>setCity(text)}
          />

          <AntDesign
            onPress={getWeather}
            name="check" size={24} color="black" 
          />

        </View>

        <View style={styles.locationContainer}>
            <Text style={styles.location}>
                {weather?.name} , {weather?.sys?.country}
            </Text>
        </View>

        <View style={styles.weatherContainer}>
            <Text style={styles.temp}>
                {(weather?.main?.temp - 273.15).toFixed(1)} °C
            </Text>

            <Text style={styles.weather}>
                dhdh
            </Text>
        </View>
        
      </SafeAreaView>
    </ImageBackground>
  )
}


export default Home


const styles = StyleSheet.create({
  image: {
    flex:1,
    resizeMode: 'cover',
  },
  textInputContainer:{
    marginTop:100,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems:"center",
    borderRadius: 10,
    alignSelf:"center",
    paddingHorizontal:10,
    width:"90%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  textInput: {
    height: 50,
    width: "80%",
    fontWeight:"600",
    fontSize: 18,
    color: "black",
  },
  locationContainer:{
    marginVertical:15,

  },
  location: {
    marginTop:5,
    color: "#FFFFFF",
    fontSize:35,
    fontWeight:"900",
    textAlign:"center",
    textShadowColor:"rgba(0,0,0,0.55)",
    textShadowOffset:{width:-1, height:1},
    textShadowRadius:5,
  },
  weatherContainer:{
    alignItems: "center",
  },
  temp:{
    textAlign:"center",
    color:"#FFF",
    fontSize:100,
    fontWeight:"800",
    backgroundColor:"rgba(255,255,255,0.2)",
    paddingVertical:20,
    paddingHorizontal:30,
    borderRadius:30,
    overflow:"hidden",
    marginTop:10,
    textShadowColor:"rgba(0, 0, 0, 0.75)",
    textShadowOffset:{width:-3, height:3},
    textShadowRadius:10,
  }
}) 