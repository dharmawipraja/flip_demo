import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './SearchBar.styles';

const SearchBar = ({ sortButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer} />
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={styles.formField}
        placeholderTextColor={'#888888'}
      />
      <TouchableOpacity onPress={sortButtonPress} style={styles.sortContainer}>
        <Text style={styles.sortLabel}>URUTKAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
