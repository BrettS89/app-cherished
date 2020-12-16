import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Back from 'react-native-vector-icons/Feather';
import { withNavigation } from 'react-navigation';
import { SET_PHOTOS } from '../redux/actions';
import colors from '../shared/styles/colors';


const HeaderBack = ({ navigation, screen, moreStyles={} }) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={[styles.button, moreStyles]}
      onPress={() => {
        navigation.navigate(screen);
        if (screen === 'Albums') {
          dispatch({ type: SET_PHOTOS, payload: [] });
        }
      }}
    >
      <Back 
        name="chevron-left"
        size={44}
        color={colors.main}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: '100%',
    // paddingHorizontal: 15,
    justifyContent: 'center'
  }
});

export default withNavigation(HeaderBack);
