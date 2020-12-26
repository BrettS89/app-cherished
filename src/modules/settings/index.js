import React from 'react';
import { useDispatch } from 'react-redux';
import { ON_LOGOUT } from '../../redux/actions';
import View from './view';

const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ON_LOGOUT, payload: () => navigation.navigate('Landing') });
  }

  return (
    <View
      logout={logout}
    />
  );
};

export default Settings;
