import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './Card.styles';
import { transformDate } from '../../Utils/date.utils';

const Card = ({ item, onPress }) => {
  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    completed_at,
    status
  } = item;
  const completedAt = transformDate(completed_at);
  const amountCurrency = `Rp${amount.toLocaleString('id-ID')}`;
  const isTransactionPending = status === 'PENDING';
  const statusText = isTransactionPending ? 'Pengecekan' : 'Berhasil';
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.colorStatus(isTransactionPending)} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {sender_bank.toUpperCase()} - {beneficiary_bank.toUpperCase()}
        </Text>
        <Text style={styles.subtitle}>- {beneficiary_name.toUpperCase()}</Text>
        <Text style={styles.subtitle}>
          {amountCurrency} . {completedAt}
        </Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText(isTransactionPending)}>
          {statusText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
