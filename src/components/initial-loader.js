import React from 'react';
import {Dimensions, RefreshControl, ScrollView} from 'react-native';
import {theme} from '../theme';

export const InitialLoader = () => {
  const offset = Dimensions.get('window').height / 2;

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[theme.colors.primary]}
          progressViewOffset={offset}
          onRefresh={() => console.log('loading...')}
          refreshing={true}
        />
      }
    />
  );
};
