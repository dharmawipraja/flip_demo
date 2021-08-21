import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './SearchBar.styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer} />
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={styles.formField}
        placeholderTextColor={'#888888'}
      />
      <TouchableOpacity style={styles.sortContainer}>
        <Text style={styles.sortLabel}>URUTKAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
