import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import { API_URL } from 'react-native-dotenv';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../../Components/Card/Card.component';
import SearchBar from '../../Components/SearchBar/SearchBar.component';
import SortModal from '../../Components/SortModal/SortModal.component';
import { addTransactions } from '../../Reducer/Transactions.slice';
import { searchData } from '../../Utils/search.utils';
import { sort } from '../../Utils/sort.utils';
import styles from './Home.styles';

const _fetchData = async (dispatch, setLoading) => {
  const response = await fetch(API_URL);
  const result = await response.json();
  const data = Object.values(result);

  await dispatch(addTransactions({ transactions: data }));
  setLoading(false);
};

const _onTransactionPressed = (navigation, id) => {
  navigation.navigate('Transaction Detail', { transactionId: id });
};

const HomeScreen = ({ navigation }) => {
  const [shouldShowSortModal, setShouldShowSortModal] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const transactions = useSelector((state) => state.transactions.list);
  const searchQuery = useSelector((state) => state.search.query);
  const sortMethod = useSelector((state) => state.sort.sortMethod);
  const dispatch = useDispatch();

  useEffect(() => {
    _fetchData(dispatch, setLoading);
  }, []);

  useEffect(() => {
    let filteredData = sort(transactions, sortMethod);

    if (searchQuery) {
      const dataFound = searchData(filteredData, searchQuery);
      filteredData = dataFound;
    }

    setFilteredTransactions(filteredData);
  }, [transactions, searchQuery, sortMethod]);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.searchContainer}>
        <SearchBar sortButtonPress={() => setShouldShowSortModal(true)} />
      </View>
      {!loading && (
        <FlatList
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          data={filteredTransactions}
          renderItem={({ item }) => (
            <Card
              item={item}
              onPress={() => _onTransactionPressed(navigation, item.id)}
            />
          )}
          contentContainerStyle={styles.contentContainer}
        />
      )}
      <SortModal
        modalVisible={shouldShowSortModal}
        onBackDropPress={() => setShouldShowSortModal(false)}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
