import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native';
import { API_URL } from 'react-native-dotenv';

import Card from '../../Components/Card/Card.component';
import SearchBar from '../../Components/SearchBar/SearchBar.component';
import styles from './Home.styles';

const fetchData = async (setTransactions) => {
  const response = await fetch(API_URL);
  const result = await response.json();
  const data = Object.values(result);

  setTransactions(data);
};

const onTransactionPressed = (navigation, id) => {
  navigation.navigate('Transaction Detail', { transactionId: id });
};

const HomeScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchData(setTransactions);
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={transactions}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => onTransactionPressed(navigation, item.id)}
          />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
