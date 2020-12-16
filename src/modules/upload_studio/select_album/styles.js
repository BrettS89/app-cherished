import { StyleSheet } from 'react-native';
import colors from '../../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  albumCard: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  icon: {
    marginRight: 15,
  },
  albumText: {
    fontWeight: '700',
    fontSize: 15
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10
  },
  modalInput: {
    marginVertical: 15,
  },
  modalNevermind: {
    alignItems: 'center',
    marginTop: 15,
  },
  nevermindText: {
    fontWeight: '700',
  }
  // familyCard: {
  //   flexDirection: 'row',
  //   paddingVertical: 20,
  //   alignItems: 'center',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#e0e0e0'
  // },
  // icon: {
  //   marginRight: 15,
  // },
  // familyText: {
  //   fontWeight: '700',
  //   marginBottom: 5,
  //   fontSize: 15
  // },
  // idText: {
  //   fontSize: 13,
  // }
});

export default styles;
