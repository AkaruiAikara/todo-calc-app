import React from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';

export default function NBProvider({children}) {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#e3ebe6',
        100: '#c8d8ce',
        200: '#adc5b5',
        300: '#91b29d',
        400: '#769f84',
        500: '#5f886d',
        600: '#4c6d57',
        700: '#395141',
        800: '#26362b',
        900: '#131b15',
      },
    },
  });
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
