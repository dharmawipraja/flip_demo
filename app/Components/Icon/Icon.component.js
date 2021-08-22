import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import styles from './Icon.styles';

const CustomIcon = ({
  code,
  size = 15,
  color = '#000000',
  customStyle = {}
}) => {
  return (
    <View style={[styles.iconContainer, customStyle]}>
      <Icon name={code} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;
