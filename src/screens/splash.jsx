import React, {useEffect, useState} from 'react';
import {WEB_CLIENT_ID} from '@env';
import {
  Box,
  Image,
  Button,
  HStack,
  Text,
  PresenceTransition,
} from 'native-base';
import AnimatedLottieView from 'lottie-react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {splashLogo} from '../assets';

export default function Splash({navigation}) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // configure the GoogleSignin object
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: false,
    });
  }, []);
  // check if user is already signed in
  useEffect(() => {
    GoogleSignin.isSignedIn()
      .then(isSignedIn => {
        if (isSignedIn) {
          setIsSignedIn(true);
          GoogleSignin.getCurrentUser().then(user => {
            setUser(user);
          });
        }
      })
      .catch(err => {
        console.log('err1', err);
      });
  }, []);
  // sign in the user
  const signIn = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      setIsSignedIn(true);
      setLoading(false);
    } catch (err) {
      console.log('err2', err);
      setLoading(false);
    }
  };
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('tabitem');
      setShowButton(true);
    }, 1000);
  }, []);
  console.log('isSignedIn', isSignedIn);
  console.log('user', user);
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Image
        size={368}
        resizeMode={'contain'}
        source={splashLogo}
        alt="splash"
      />
      <PresenceTransition
        visible={showButton}
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 500}}}>
        <Button
          isLoading={loading}
          pr={6}
          colorScheme="transparent"
          bg="white"
          rounded="full"
          android_ripple={{color: 'gray', radius: 110}}
          onPress={() => {
            signIn();
          }}>
          <HStack space={2} alignItems="center">
            <AnimatedLottieView
              source={require('../assets/lottie/google.json')}
              autoPlay
              loop={false}
              style={{
                width: 50,
              }}
            />
            <Text>Sign In with Google</Text>
          </HStack>
        </Button>
      </PresenceTransition>
    </Box>
  );
}
