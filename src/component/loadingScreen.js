import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Colors} from '../constant/styles';

const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    // Fonts are linked and loaded at build-time now
    navigation.navigate('Splash');
  }, []);

  return <View style={{flex: 1, backgroundColor: Colors.whiteColor}} />;
};

export default LoadingScreen;
