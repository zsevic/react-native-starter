import {DefaultTheme} from 'react-native-paper';

export const iconSize = 17;

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F3C7E',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      ...DefaultTheme.fonts.regular,
      fontFamily: 'Roboto',
    },
  },
};
