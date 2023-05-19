import React, {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      <Appbar.Content title="React Native starter" />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" color="white" onPress={openMenu} />}>
        <Menu.Item onPress={() => {}} title="Terms and conditions" />
        <Menu.Item onPress={() => {}} title="Privacy policy" />
      </Menu>
    </Appbar.Header>
  );
};
