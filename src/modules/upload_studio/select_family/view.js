import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

import FamilyCard from './components/FamilyCard';
import styles from './styles';

const SelectFamilyView = ({ families, selectFamily }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={families}
        keyExtractor={family => family._id}
        renderItem={({ item }) => (
          <FamilyCard
            family={item}
            selectFamily={selectFamily}
          />
        )}
      />
    </View>
  );
};

SelectFamilyView.propTypes = {
  families: PropTypes.array.isRequired
}

export default SelectFamilyView;

