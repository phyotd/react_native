import {DarkTheme} from '@react-navigation/native';

export const localDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    textColor: '#ffffff',
    buttonColor: 'red',
    iconColor: 'blue',
  },
  paddingHorizontal: 10,
};
