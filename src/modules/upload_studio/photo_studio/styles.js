import { StyleSheet } from 'react-native';
import colors from '../../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.main,
    height: 100,
    width: 100,
    borderRadius: 50,
  }
});

export default styles;
