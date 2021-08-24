import { StyleSheet } from 'react-native';
import Color from '../../Constants/Colors';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Color.overlay,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    backgroundColor: Color.white,
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
