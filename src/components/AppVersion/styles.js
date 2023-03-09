import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    maxHeight: 250,
    minHeight: 200,
    minWidth: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between'
  },

  redirectButton: {
    alignItems: 'center',
    backgroundColor: '#172b49',
    height: 30,
    paddingHorizontal: 5,
    justifyContent: 'center',
    width: 'auto'
  },
  redirectButtonText: {
    color: '#f4f5fd',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
