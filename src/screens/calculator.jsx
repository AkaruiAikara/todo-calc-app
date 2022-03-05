import React, {useState} from 'react';
import {
  Box,
  Center,
  Input,
  FormControl,
  HStack,
  VStack,
  Button,
  Text,
  useTheme,
} from 'native-base';

export default function Calculator() {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  // handle press of a number button
  const handleNumberPress = number => {
    setInput(input + number);
  };
  // handle evaluation of input
  const handleEvaluate = () => {
    try {
      if (input) {
        const evaluated = eval(input);
        setOutput(evaluated);
        setInput(`${evaluated}`);
      }
    } catch (error) {
      setOutput('Error');
    }
  };
  // handle clear of input
  const handleClear = () => {
    setInput('');
    setOutput('');
  };
  // handle backspace of input
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <Center>
      <FormControl w="80%">
        <FormControl.Label _text={{color: 'primary.700', fontSize: '2xl'}}>
          Calculator
        </FormControl.Label>
        {output ? (
          output == input ? (
            <Input
              size="xl"
              variant="underlined"
              my={12}
              w="full"
              textAlign="right"
              fontSize="7xl"
              showSoftInputOnFocus={false}
              autoFocus
              value={input}
            />
          ) : (
            <>
              <Text mt={12} textAlign="right" fontSize="7xl">
                {output}
              </Text>
              <Input
                size="xl"
                variant="underlined"
                w="full"
                mb={4}
                textAlign="right"
                showSoftInputOnFocus={false}
                autoFocus
                value={input}
              />
            </>
          )
        ) : (
          <Input
            size="xl"
            variant="underlined"
            my={12}
            w="full"
            textAlign="right"
            showSoftInputOnFocus={false}
            autoFocus
            value={input}
          />
        )}
      </FormControl>
      <Box>
        <VStack space="5">
          <HStack space="5" alignItems="center">
            <Box size={20}></Box>
            <Box size={20}></Box>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleClear()}>
              C
            </Button>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleBackspace()}>
              ⌫
            </Button>
          </HStack>
          <HStack space="5" alignItems="center">
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('1')}>
              1
            </Button>
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('2')}>
              2
            </Button>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleNumberPress('-')}>
              -
            </Button>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleNumberPress('+')}>
              +
            </Button>
          </HStack>
          <HStack space="5" alignItems="center">
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('3')}>
              3
            </Button>
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('4')}>
              4
            </Button>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleNumberPress('/')}>
              /
            </Button>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleNumberPress('*')}>
              *
            </Button>
          </HStack>
          <HStack space="5" alignItems="center">
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('5')}>
              5
            </Button>
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('6')}>
              6
            </Button>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleNumberPress('%')}>
              %
            </Button>
            <Button
              bg="primary.600"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[900]}}
              onPress={() => handleEvaluate()}>
              =
            </Button>
          </HStack>
          <HStack space="5" alignItems="center">
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('7')}>
              7
            </Button>
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('8')}>
              8
            </Button>
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('9')}>
              9
            </Button>
            <Button
              bg="primary.400"
              size={20}
              rounded="lg"
              _text={{color: 'white', fontSize: '2xl'}}
              android_ripple={{color: theme.colors.primary[500]}}
              onPress={() => handleNumberPress('0')}>
              0
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
