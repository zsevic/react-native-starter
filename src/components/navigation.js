import React, {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import {themeColor} from '../theme';
import {RentRoute} from '../screens/rent';
import {SaleRoute} from '../screens/sale';

export const Navigation = () => {
  const [index, setIndex] = useState(0);
  const routesConfig = [
    {key: 'sale', title: 'sale', icon: 'office-building-outline'},
    {key: 'rent', title: 'rent', icon: 'office-building'},
  ];
  const [routes] = useState(routesConfig);

  const navigationIndices = {};
  routesConfig.forEach((item, itemIndex) => {
    navigationIndices[item.key] = itemIndex;
  });

  const onIndexChange = i => {
    if (index === i) {
      return;
    }

    setIndex(i);
  };

  const renderScene = BottomNavigation.SceneMap({
    rent: RentRoute,
    sale: SaleRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={onIndexChange}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: themeColor,
      }}
    />
  );
};
