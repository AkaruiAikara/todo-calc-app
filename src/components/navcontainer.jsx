import React from 'react';
import {useTheme} from 'native-base';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

export default function NavContainer({children}) {
  const theme = useTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.primary[50],
    },
  };
  return <NavigationContainer theme={MyTheme}>{children}</NavigationContainer>;
}
