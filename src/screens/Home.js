import React from 'react'
import {View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import background from '../../assets/images/1540030.jpg'

function Home() {
  return (
    <ImageBackground source={background} style={styles.image}>
      <SafeAreaView>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
          placeholder={"enter xx City"}/>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}


export default Home


const styles = StyleSheet.create({
  image: {
    flex:1,
    // justifyContent:"center",
    resizeMode: 'cover',
  },
  textInputContainer:{
    backgroundColor: "red",

  }
})