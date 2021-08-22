import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingTop: 30,
    width: 350,
    height: 400,
    borderRadius: 10
  },
  radioButton: {
    marginBottom: 20
  },
  radioButtonLabel: {
    fontSize: 16
  }
});

export default styles;
