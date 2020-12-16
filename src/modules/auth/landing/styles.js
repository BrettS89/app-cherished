import { StyleSheet } from 'react-native';
import colors from '../../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.secondary,
    fontSize: 60,
    fontFamily: 'title',
  },
  buttonStyle: {
    marginBottom: 15,
    width: 175,
  }
});

export default styles;
