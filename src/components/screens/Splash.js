import React from 'react';
import {StyleSheet, Text, SafeAreaView, ImageBackground} from 'react-native';

const image = {uri: '../../images/background.png'};

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require("../../images/background.png")} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>SKG-999</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
});
