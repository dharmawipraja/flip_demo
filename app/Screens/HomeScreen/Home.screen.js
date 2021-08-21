import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { API_URL } from 'react-native-dotenv';
import Card from '../../Components/Card/Card.component';

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

  return (
    <FlatList
      data={transactions}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

export default HomeScreen;
