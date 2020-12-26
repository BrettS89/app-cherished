import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  photoCard: {
    width: '33%',
    aspectRatio: 1
  },
  photo: {
    width: '99%',
    height: '99%',
    aspectRatio: 1,
  },
});

export default styles;
