import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  modal: {
    paddingTop: 5
  },
  modalTitle: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  joinButton: {
    marginBottom: 15,
  },
  noThanks: {
    textAlign: 'center',
    color: colors.secondary,
    fontWeight: '700'
  }
});

export default styles;
