import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider, extendTheme} from 'native-base';
import Container from './Container';

export default function App() {
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
  return (
    <NativeBaseProvider theme={theme}>
      <Container />
    </NativeBaseProvider>
  );
}
