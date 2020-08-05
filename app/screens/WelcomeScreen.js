import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagline}>Funko-Pop Market</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title='Login' />
        <Button title='Register' color='secondary' />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    color: '#fff',
    paddingVertical: 20,
    fontWeight: '600',
    fontSize: 25,
  },
});
