import React, {useEffect} from 'react';
import {Box, Image} from 'native-base';
import {splashLogo} from '../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('tabitem');
    }, 1000);
  }, []);
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Image
        size={368}
        resizeMode={'contain'}
        source={splashLogo}
        alt="splash"
      />
    </Box>
  );
}
