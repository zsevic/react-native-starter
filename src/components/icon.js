import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {iconSize} from '../theme';

export const TextIcon = ({name}) => (
  <Icon name={name} size={iconSize} style={style.icon} />
);

const style = StyleSheet.create({
  icon: {
    marginRight: -6,
  },
});
