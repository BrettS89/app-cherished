import * as SplashScreen from 'expo-splash-screen'
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';

const Landing = ({ navigation }) => {
  SplashScreen.hideAsync();

  return (
    <View style={styles.container}>
      <View style={{ height: 75, marginBottom: 50 }}>
        <Text style={styles.title}>
          Cherished
        </Text>
      </View>
      <Button text="Sign up" buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('Signup')} />
      <Button text="Login" buttonStyle={styles.buttonStyle} onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Landing;
