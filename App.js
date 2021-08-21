import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  Text, View
} from 'react-native';
import { API_URL } from 'react-native-dotenv'

const dateTransform = (date) => {
  const splitDate = date.split(' ');
  const chunk = splitDate[0].split('-');
  const months = ["Januari", "Februari", "Mare", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const day = chunk[2];
  const month = chunk[1];
  const monthName = months[month - 1];
  const year = chunk[0];

  return `${day} ${monthName} ${year}`;
}

const renderItem = ({item}) => {
  const { sender_bank, beneficiary_bank, beneficiary_name, status, amount, completed_at } = item;
  const completedAt = dateTransform(completed_at)
  return (
    <View style={{ backgroundColor: '#ffffff', marginBottom: 10, marginHorizontal: 10, borderRadius: 5, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{sender_bank.toUpperCase()} - {beneficiary_bank.toUpperCase()}</Text>
      <Text style={{ fontSize: 18 }}>- {beneficiary_name.toUpperCase()}</Text>
      <Text style={{ fontSize: 18 }}>{amount} . {completedAt}</Text>
    </View>
  )
}

const fetchData = async (setTransactions) => {
  const response = await fetch(API_URL);
  const result = await response.json();
  const data = Object.values(result)

  setTransactions(data);
}

const App = () => {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    fetchData(setTransactions)
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex:1, backgroundColor: '#f7f7f7' }}>
        <FlatList
          data={transactions}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
