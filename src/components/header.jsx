import React from 'react';
import {HStack, VStack, Image, Text} from 'native-base';
import AnimatedLottieView from 'lottie-react-native';
import {useRoute} from '@react-navigation/native';
import {avatar} from '../assets';

export default function Header() {
  const animation = React.useRef(null);
  const route = useRoute();
  return (
    <HStack h={200}>
      <AnimatedLottieView
        ref={animation}
        source={
          route.name === 'Todo'
            ? require(`../assets/lottie/todo.json`)
            : require(`../assets/lottie/calc.json`)
        }
        autoPlay
        loop
        style={{
          height: 250,
          width: 250,
          alignSelf: 'center',
        }}
      />
      <HStack
        space={4}
        bg="white"
        w={320}
        h={48}
        my="auto"
        py={12}
        pl={12}
        shadow={9}
        alignItems="center"
        rounded="full">
        <Image source={avatar} alt="avatar" size="sm" rounded="full" />
        <VStack>
          <Text color="fuchsia.500" fontSize={24}>
            Hai!
          </Text>
          <Text color="primary.600" fontSize={20} maxW={100}>
            Fallah
          </Text>
        </VStack>
      </HStack>
    </HStack>
  );
}
