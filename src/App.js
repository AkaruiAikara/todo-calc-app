import React from 'react';
import 'react-native-gesture-handler';
import {NBProvider, NavContainer, Main} from './components';

export default function App() {
  return (
    <NBProvider>
      <NavContainer>
        <Main />
      </NavContainer>
    </NBProvider>
  );
}
