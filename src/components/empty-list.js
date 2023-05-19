import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const EmptyList = () => {
  return (
    <View style={style.emptyList}>
      <Text>No results</Text>
    </View>
  );
};

const style = StyleSheet.create({
  emptyList: {
    alignItems: 'center',
    marginTop: 2,
  },
});
