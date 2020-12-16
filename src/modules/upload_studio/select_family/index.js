import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import View from './view';
import api from '../../../lib/api';
import { SET_FAMILY } from '../../../redux/actions';

const SelectFamily = ({ navigation }) => {
  const dispatch = useDispatch();
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    // console.log(api.service);
    fetchFamilies()
  }, []);

  const fetchFamilies = async () => {    
    const { data } = await api.service('security/account').find({
      limit: 100
    });
    
    setFamilies(data);
  };

  const selectFamily = (_id) => {
    dispatch({ type: SET_FAMILY, payload: _id });
    navigation.navigate('SelectAlbum');
  };

  return (
    <View
      families={families}
      selectFamily={selectFamily}
    />
  );
};

export default SelectFamily;
