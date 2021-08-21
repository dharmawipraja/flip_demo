import React from 'react';
import { View, Text } from 'react-native';

const DetailScreen = ({ route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Transaction ID: {route?.params?.transactionId} </Text>
    </View>
  );
};

export default DetailScreen;
