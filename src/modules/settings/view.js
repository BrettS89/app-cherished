import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Text from '../../components/Txt';
import alert from '../../utilities/alert';

const SettingsView = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.row}>
        <TouchableOpacity onPress={() => alert(`contact@cherished.com

609 213 1708`)}>
          <Text styles={styles.text}>
            Contact us
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Text styles={styles.text}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingsView;
