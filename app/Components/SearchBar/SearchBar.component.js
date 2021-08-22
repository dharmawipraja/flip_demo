import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { search } from '../../Reducer/Search.slice';
import Icon from '../Icon/Icon.component';
import styles from './SearchBar.styles';

const SearchBar = ({ sortButtonPress }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Icon code="search" />
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={styles.formField}
        placeholderTextColor={'#888888'}
        onChangeText={(text) => dispatch(search({ query: text }))}
      />
      <TouchableOpacity onPress={sortButtonPress} style={styles.sortContainer}>
        <Text style={styles.sortLabel}>URUTKAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
