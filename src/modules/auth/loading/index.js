import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useDispatch } from 'react-redux';
import { INITIALIZE_APP } from '../../../redux/actions';

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: INITIALIZE_APP, payload: navigate });
  }, []);

  const navigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <AppLoading />
  );
}

export default Auth;
