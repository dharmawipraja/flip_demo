import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './Card.styles';
import { transformDate } from '../../Utils/date.utils';
import Icon from '../Icon/Icon.component';

const _renderBank = (sender_bank, beneficiary_bank) => (
  <View style={styles.row}>
    <Text style={styles.title}>{sender_bank.toUpperCase()}</Text>
    <Icon code="arrow-right" />
    <Text style={styles.title}>{beneficiary_bank.toUpperCase()}</Text>
  </View>
);

const _renderAmount = (amountCurrency, completedAt) => (
  <View style={styles.row}>
    <Text style={styles.subtitle}>{amountCurrency}</Text>
    <Icon code="circle" size={10} customStyle={styles.dotIcon} />
    <Text style={styles.subtitle}>{completedAt}</Text>
  </View>
);

const _renderStatus = (statusText, isTransactionPending) => (
  <View style={styles.statusContainer}>
    <Text style={styles.statusText(isTransactionPending)}>{statusText}</Text>
  </View>
);

const Card = ({ item, onPress }) => {
  const {
    sender_bank,
    beneficiary_bank,
    beneficiary_name,
    amount,
    created_at,
    status
  } = item;
  const createdAt = transformDate(created_at);
  const amountCurrency = `Rp${amount.toLocaleString('id-ID')}`;
  const isTransactionPending = status === 'PENDING';
  const statusText = isTransactionPending ? 'Pengecekan' : 'Berhasil';
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.colorStatus(isTransactionPending)} />
      <View style={styles.contentContainer}>
        {_renderBank(sender_bank, beneficiary_bank)}
        <Text style={styles.subtitle}>- {beneficiary_name.toUpperCase()}</Text>
        {_renderAmount(amountCurrency, createdAt)}
      </View>
      {_renderStatus(statusText, isTransactionPending)}
    </TouchableOpacity>
  );
};

export default Card;
