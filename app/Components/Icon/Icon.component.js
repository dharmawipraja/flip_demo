import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Color from '../../Constants/Colors';
import styles from './Icon.styles';

const CustomIcon = ({
  code,
  size = 15,
  color = Color.black,
  customStyle = {}
}) => {
  return (
    <View style={[styles.iconContainer, customStyle]}>
      <Icon name={code} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;
