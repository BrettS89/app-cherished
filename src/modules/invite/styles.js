import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  form: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  title: {
    color: colors.text,
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    marginBottom: 10,
  }
});

export default styles;
