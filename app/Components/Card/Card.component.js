import React from 'react';
import { Text, View } from 'react-native';

import styles from './Card.styles';
import { transformDate } from '../../Utils/date.utils';

const Card = (props) => {
  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    completed_at,
    status
  } = props.item;
  const completedAt = transformDate(completed_at);
  const amountCurrency = `Rp${amount.toLocaleString('id-ID')}`;
  const isTransactionPending = status === 'PENDING';
  const statusText = isTransactionPending ? 'Pengecekan' : 'Berhasil';
  return (
    <View style={styles.cardContainer}>
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
    </View>
  );
};

export default Card;
