import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import Color from '../../Constants/Colors';
import { search } from '../../Reducer/Search.slice';
import { useDebounce } from '../../Utils/debounce.utils';
import Icon from '../Icon/Icon.component';
import styles from './SearchBar.styles';

const SearchBar = ({ sortButtonPress }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    dispatch(search({ query: debouncedQuery }));
  }, [debouncedQuery]);

  return (
    <View style={styles.container}>
      <Icon code="search" />
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        style={styles.formField}
        placeholderTextColor={Color.gray}
        onChangeText={(text) => setQuery(text)}
      />
      <TouchableOpacity onPress={sortButtonPress} style={styles.sortContainer}>
        <Text style={styles.sortLabel}>URUTKAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
