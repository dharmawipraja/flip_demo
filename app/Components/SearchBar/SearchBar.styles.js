import { StyleSheet } from 'react-native';

import Color from '../../Constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    overflow: 'hidden'
  },
  iconContainer: {
    flex: 0.1
  },
  formField: {
    flex: 1,
    fontSize: 16,
    marginRight: 10
  },
  sortContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  sortLabel: {
    fontSize: 16,
    color: Color.orange
  }
});

export default styles;
