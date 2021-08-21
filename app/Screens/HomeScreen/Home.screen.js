import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { API_URL } from 'react-native-dotenv';

import styles from './Home.styles';
import { transformDate } from '../../Utils/date.utils';

const renderItem = ({ item }) => {
  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    completed_at
  } = item;
  const completedAt = transformDate(completed_at);
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>
        {sender_bank.toUpperCase()} - {beneficiary_bank.toUpperCase()}
      </Text>
      <Text style={styles.subtitle}>- {beneficiary_name.toUpperCase()}</Text>
      <Text style={styles.subtitle}>
        {amount} . {completedAt}
      </Text>
    </View>
  );
};

const fetchData = async (setTransactions) => {
  const response = await fetch(API_URL);
  const result = await response.json();
  const data = Object.values(result);

  setTransactions(data);
};

const HomeScreen = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchData(setTransactions);
  }, []);

  return <FlatList data={transactions} renderItem={renderItem} />;
};

export default HomeScreen;
