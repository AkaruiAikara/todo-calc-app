import React from 'react';
import {NativeBaseProvider, extendTheme, Box} from 'native-base';

import Calculator from './src/screens/calculator';

export default function App() {
  const theme = extendTheme();
  return (
    <NativeBaseProvider theme={theme}>
      <Box _light={{bg: 'primary.50'}} flex="1" px="4" py="12">
        <Calculator />
      </Box>
    </NativeBaseProvider>
  );
}
