import React, {useEffect, useState} from 'react';
import {
  Box,
  Text,
  HStack,
  Checkbox,
  Pressable,
  FlatList,
  Modal,
  Input,
  useTheme,
} from 'native-base';
import {LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import AnimatedLottieView from 'lottie-react-native';
import {Header} from '../components';

export default function Todo() {
  const ref = firestore().collection('todos');
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        list.push({id: doc.id, ...doc.data()});
      });
      setTodos(list);
      setLoading(false);
    });
  }, []);
  // delete todo
  const deleteTodo = async id => {
    setLoading(true);
    await ref.doc(id).delete();
    setLoading(false);
  };
  // toggle todo
  const toggleTodo = async id => {
    setLoading(true);
    const todo = await ref.doc(id).get();
    await ref.doc(id).update({
      completed: !todo.data().completed,
    });
    setLoading(false);
  };
  // handle input change
  const handleInputChange = text => {
    setInput(text);
  };
  // handle add todo
  const handleAddTodo = async () => {
    if (input) {
      setLoading(true);
      setShowModal(false);
      await ref.add({
        title: input,
        completed: false,
        createdAt: new Date().toISOString(),
      });
      setInput('');
      setLoading(false);
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
            {new Date(item.createdAt).toLocaleTimeString()}
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
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={_renderItem}
        />
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
      <Modal isOpen={loading}>
        <AnimatedLottieView
          source={require(`../assets/lottie/loading.json`)}
          autoPlay
          loop
          style={{
            width: 100,
            alignSelf: 'center',
          }}
        />
      </Modal>
    </>
  );
}
