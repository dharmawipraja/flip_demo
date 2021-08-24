import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 25,
    backgroundColor: 'white'
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bankContainer: {
    flexDirection: 'row',
    marginLeft: 3
  },
  userDataContainer: {
    marginBottom: 30
  },
  userDataTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  userDataSubtitle: {
    fontSize: 16
  },
  transactionDetailContainer: {
    padding: 25,
    backgroundColor: 'white'
  },
  transactionDetailRow: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 3
  },
  transactionDetailLeftSection: {
    flex: 1
  },
  transactionDetailRightSection: {
    flex: 0.5
  },
  detailTransaksiButton: {
    color: '#50C900',
    fontSize: 18,
    marginLeft: 130
  },
  separator: {
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1
  }
});

export default styles;
