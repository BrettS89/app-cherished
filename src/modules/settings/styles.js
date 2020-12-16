import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  row: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  text: {
    color: colors.main,
    fontWeight: '700',
    fontSize: 15,
  }
});

export default styles;
