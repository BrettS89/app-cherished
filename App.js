import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoadingModal from './src/components/LoadingModal';
import Navigation from './src/navigation';
import store from './src/redux';

export default function App() { 
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    loadFont();
  }, []);

  const loadFont = async () => {
    await Font.loadAsync({
      title: require('./assets/fonts/Vibur-Regular.ttf'),
    });

    setLoaded(true);
    console.log('inn');
  }

  return loaded ? (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
        <LoadingModal />
      </View>
    </Provider>
  ) : <AppLoading />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
