import React, {useEffect, useState} from 'react';
import {
  Box,
  Text,
  HStack,
  ScrollView,
  Checkbox,
  Pressable,
  FlatList,
  Modal,
  Input,
  useTheme,
} from 'native-base';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Header} from '../components';

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

export default function Todo() {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState(DATA);
  const [input, setInput] = useState('');
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  // delete todo
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  // toggle todo
  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      }),
    );
  };
  // handle input change
  const handleInputChange = text => {
    setInput(text);
  };
  // handle add todo
  const handleAddTodo = () => {
    if (input) {
      const newTodo = {
        id: Math.random().toString(),
        title: input,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos([...todos, newTodo]);
      setInput('');
      setShowModal(false);
    }
  };
  const _renderItem = ({item}) => {
    return (
      <Box
        bg={item.completed ? 'primary.100' : 'white'}
        px={8}
        mx="auto"
        my={3}
        w="80%"
        h={24}
        rounded="lg"
        shadow={item.completed ? 0 : 9}
        justifyContent="center">
        <HStack alignItems="center">
          <Checkbox
            defaultIsChecked={item.completed}
            value={item.id}
            onChange={() => toggleTodo(item.id)}>
            {item.title}
          </Checkbox>
          <Text fontSize="xs" ml="auto" mt={10}>
            {new Date(item.createdAt).toLocaleString()}
          </Text>
        </HStack>
        <Pressable
          position="absolute"
          top={-8}
          right={-8}
          android_ripple={{
            color: theme.colors.red[900],
            radius: 8,
          }}
          onPress={() => deleteTodo(item.id)}>
          <Icon name="closecircle" size={24} color={theme.colors.red[500]} />
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
      {todos.length > 0 ? (
        <ScrollView>
          <FlatList data={todos} renderItem={_renderItem} />
        </ScrollView>
      ) : (
        <Text mx="auto" my={8} fontSize={24} color="primary.700">
          Ups, no todo's yet... 🤷‍♂️
        </Text>
      )}
      <Pressable
        position="absolute"
        right={5}
        bottom={6}
        bg="primary.500"
        p={4}
        rounded="full"
        onPress={() => setShowModal(true)}
        android_ripple={{color: theme.colors.primary[900], radius: 28}}>
        <Icon name="plus" size={24} color="white" />
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        {input ? (
          <Pressable
            position="absolute"
            right={5}
            bottom={24}
            bg="primary.500"
            p={4}
            rounded="full"
            onPress={handleAddTodo}
            android_ripple={{color: theme.colors.primary[900], radius: 28}}>
            <Icon name="right" size={24} color="white" />
          </Pressable>
        ) : (
          <Pressable
            position="absolute"
            right={5}
            bottom={24}
            bg="primary.500"
            p={4}
            rounded="full"
            onPress={() => setShowModal(false)}
            android_ripple={{color: theme.colors.primary[900], radius: 28}}>
            <Icon name="close" size={24} color="white" />
          </Pressable>
        )}
        <Modal.Content rounded="full" p={0} mt="auto" mb={24} mr={12}>
          <Modal.Body>
            <Input
              mx={0}
              py={2}
              placeholder="What do you need to do?"
              w="full"
              rounded="full"
              borderColor="white"
              _focus={{
                borderColor: 'white',
              }}
              value={input}
              onChangeText={handleInputChange}
            />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
