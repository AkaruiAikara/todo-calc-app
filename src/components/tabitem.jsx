import React from 'react';
import {useTheme} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Todo, Calculator} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabItem() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Todo') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          height: 72,
          paddingBottom: 8,
          backgroundColor: theme.colors.primary[100],
        },
        tabBarActiveTintColor: theme.colors.primary[600],
        tabBarInactiveTintColor: '#000',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Todo" component={Todo} options={{headerShown: false}} />
      <Tab.Screen
        name="Calculator"
        component={Calculator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
