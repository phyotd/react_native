import {DefaultTheme} from '@react-navigation/native';

export const localDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: '#404040',
    textColor: '#000000',
    buttonColor: '#ff2c5c',
    iconColor: 'blue',
  },
  paddingHorizontal: 10,
};
