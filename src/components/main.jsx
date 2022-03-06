import React from 'react';
import {Box, StatusBar} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from '../screens';
import {TabItem} from './';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Box pt={20} bg="primary.50"></Box>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tabitem"
          component={TabItem}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
