import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_URL } from 'react-native-dotenv';
import Card from '../../Components/Card/Card.component';

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
    <SafeAreaView>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => onTransactionPressed(navigation, item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
