import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import colors from '../../../../shared/styles/colors';
import styles from '../styles';
import Txt from '../../../../components/Txt';

const FamilyCard = ({ family: { _id, name }, selectFamily }) => {
  return (
    <TouchableOpacity
      style={styles.familyCard}
      onPress={() => selectFamily(_id)}
    >
      <View style={styles.icon}>
        <Icon
          name="user-friends"
          size={30}
          color={colors.main}
        />
      </View>
      <View>
        <Txt styles={styles.familyText}>
          {name}
        </Txt>
        <Txt styles={styles.idText}>
          {_id}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};

export default FamilyCard;
