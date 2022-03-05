import React from 'react';
import {Box, StatusBar, useTheme} from 'native-base';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/splash';
import TabItem from './src/components/tabitem';

const Stack = createNativeStackNavigator();

export default function Container() {
  const theme = useTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.primary[50],
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
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
    </NavigationContainer>
  );
}
