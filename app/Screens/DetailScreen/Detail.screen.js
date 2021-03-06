import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';

import Icon from '../../Components/Icon/Icon.component';
import Color from '../../Constants/Colors';
import { transformDate } from '../../Utils/date.utils';
import styles from './Detail.styles';

const _renderBank = (sender_bank, beneficiary_bank) => (
  <View style={styles.bankContainer}>
    <Text style={styles.labelText}>{sender_bank.toUpperCase()}</Text>
    <Icon code="arrow-right" />
    <Text style={styles.labelText}>{beneficiary_bank.toUpperCase()}</Text>
  </View>
);

const _renderUserData = (title, subtitle) => (
  <View style={styles.userDataContainer}>
    <Text style={styles.userDataTitle}>{title.toUpperCase()}</Text>
    <Text style={styles.userDataSubtitle}>{subtitle}</Text>
  </View>
);

const _renderTransactionIdSection = (transactionId) => (
  <View style={styles.rowContainer}>
    <Text style={styles.labelText}>Transaction ID: #{transactionId}</Text>
    <TouchableOpacity onPress={() => Clipboard.setString(transactionId)}>
      <Icon code="clone" size={20} color={Color.orange} />
    </TouchableOpacity>
  </View>
);

const _renderDetailTransaksiSection = (showTransaction, setShowTransaction) => (
  <View style={styles.rowContainer}>
    <Text style={styles.labelText}>DETAIL TRANSAKSI</Text>
    <TouchableOpacity onPress={() => setShowTransaction(!showTransaction)}>
      <Text style={styles.detailTransaksiButton}>
        {showTransaction ? 'Tutup' : 'Buka'}
      </Text>
    </TouchableOpacity>
  </View>
);

const _renderTransactionDataSection = (transaction) => {
  const {
    account_number,
    beneficiary_name,
    beneficiary_bank,
    sender_bank,
    amount,
    created_at,
    unique_code,
    remark
  } = transaction;
  const name = `- ${beneficiary_name}`;
  const createdAt = transformDate(created_at);
  const amountCurrency = `Rp${amount.toLocaleString('id-ID')}`;
  return (
    <View style={styles.transactionDetailContainer}>
      {_renderBank(sender_bank, beneficiary_bank)}
      <View style={styles.transactionDetailRow}>
        <View style={styles.transactionDetailLeftSection}>
          {_renderUserData(name, account_number)}
          {_renderUserData('Berita Transfer', remark)}
          {_renderUserData('Waktu Dibuat', createdAt)}
        </View>
        <View style={styles.transactionDetailRightSection}>
          {_renderUserData('Nominal', amountCurrency)}
          {_renderUserData('Kode Unik', unique_code)}
        </View>
      </View>
    </View>
  );
};

const DetailScreen = ({ route }) => {
  const [showTransaction, setShowTransaction] = useState(true);
  const transactionId = route?.params?.transactionId;
  const transactionList = useSelector((state) => state.transactions.list);
  const transaction = transactionList.find((item) => item.id === transactionId);

  return (
    <View style={styles.container}>
      {_renderTransactionIdSection(transactionId)}
      <View style={styles.separator} />
      {_renderDetailTransaksiSection(showTransaction, setShowTransaction)}
      <View style={styles.separator} />
      {showTransaction && _renderTransactionDataSection(transaction)}
    </View>
  );
};

export default DetailScreen;
