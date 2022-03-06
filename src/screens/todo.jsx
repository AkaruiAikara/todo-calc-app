import React, {useEffect} from 'react';
import {
  Box,
  Text,
  HStack,
  VStack,
  ScrollView,
  Image,
  Checkbox,
  Pressable,
  FlatList,
  useTheme,
} from 'native-base';
import {LogBox} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from '../components';
import {avatar} from '../assets';

export default function Todo() {
  const theme = useTheme();
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const DATA = [
    {
      id: '1',
      title: 'Buy milk',
      completed: true,
      createdAt: '2022-03-06T08:21:17.624Z',
    },
    {
      id: '2',
      title: 'Buy eggs',
      completed: false,
      createdAt: '2022-03-06T08:21:17.624Z',
    },
    {
      id: '3',
      title: 'Buy bread',
      completed: false,
      createdAt: '2022-03-06T08:21:17.624Z',
    },
    {
      id: '4',
      title: 'Buy coffee',
      completed: true,
      createdAt: '2022-03-06T08:21:17.624Z',
    },
    {
      id: '5',
      title: 'Buy tea',
      completed: false,
      createdAt: '2022-03-06T08:21:17.624Z',
    },
    {
      id: '6',
      title: 'Buy water',
      completed: false,
      createdAt: '2022-03-06T08:21:17.624Z',
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <Box
        bg="white"
        px={8}
        mx="auto"
        my={3}
        w="80%"
        h={24}
        rounded="lg"
        shadow={9}
        justifyContent="center">
        <HStack alignItems="center">
          {item.completed ? (
            <Checkbox isChecked value="checkbox">
              {item.title}
            </Checkbox>
          ) : (
            <Checkbox value="checkbox">{item.title}</Checkbox>
          )}
          <Text fontSize="xs" ml="auto" mt={10}>
            {item.createdAt}
          </Text>
        </HStack>
        <Pressable
          position="absolute"
          top={-8}
          right={-8}
          android_ripple={{
            color: theme.colors.red[900],
            radius: 8,
          }}>
          <Icon name="close-circle" size={24} color={theme.colors.red[500]} />
        </Pressable>
      </Box>
    );
  };
  return (
    <>
      <Header />
      <Text pl={12} my={4} fontSize={32} color="primary.700" fontWeight="light">
        Todo's
      </Text>
      <ScrollView>
        <FlatList data={DATA} renderItem={_renderItem} />
      </ScrollView>
    </>
  );
}
