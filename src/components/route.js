import React, {forwardRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {AppHeader} from './app-header';
import {EmptyList} from './empty-list';

export const Route = forwardRef((props, listRef) => {
  const {rentOrSale} = props;

  return (
    <View>
      <FlatList
        ref={listRef}
        data={[]}
        style={style.list}
        ListEmptyComponent={() => <EmptyList />}
        renderItem={() => <Text>item</Text>}
        ListHeaderComponent={
          <View>
            <AppHeader rentOrSale={rentOrSale} />
          </View>
        }
        ListFooterComponent={<View style={style.footerButtons} />}
      />
    </View>
  );
});

const style = StyleSheet.create({
  activityIndicator: {marginVertical: 20},
  footerButtons: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
  },
  list: {
    marginBottom: 10,
  },
});
