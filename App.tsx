import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Components/Screens/Home/Home';import { IMAGES } from './assets';
;
const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.backgroundImage} style={styles.backgroundImage} />
      <Home />

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    position:'absolute'

  }
});
