import { StyleSheet } from 'react-native';
import colors from '../../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  familyCard: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  icon: {
    marginRight: 15,
  },
  familyText: {
    fontWeight: '700',
    marginBottom: 5,
    fontSize: 15
  },
  idText: {
    fontSize: 13,
  }
});

export default styles;
