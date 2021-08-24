import { StyleSheet } from 'react-native';

import Color from '../../Constants/Colors';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.white,
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
    height: '100%'
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 20
  },
  statusContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20
  },
  colorStatus: (isPending) => ({
    flex: 0.03,
    backgroundColor: isPending ? Color.orange : Color.green
  }),
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5
  },
  statusText: (isPending) => ({
    fontSize: 14,
    backgroundColor: isPending ? Color.white : Color.green,
    color: isPending ? Color.black : Color.white,
    fontWeight: 'bold',
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderWidth: 2,
    borderColor: isPending ? Color.orange : Color.green,
    borderRadius: 5,
    overflow: 'hidden'
  }),
  row: {
    flexDirection: 'row'
  },
  dotIcon: {
    marginHorizontal: 5,
    marginTop: 5
  }
});

export default styles;
