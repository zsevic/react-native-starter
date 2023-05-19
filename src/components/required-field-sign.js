import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const RequiredFieldSign = () => (
  <View>
    <Text style={style.requiredFieldSign}>* </Text>
  </View>
);

const style = StyleSheet.create({
  requiredFieldSign: {color: 'red'},
});
