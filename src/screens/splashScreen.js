import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {Fonts, Sizes} from '../constant/styles';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.push('Login');
  }, 2000);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/bg.jpg')}
        resizeMode="cover">
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={[
            'black',
            'rgba(0,0,0,0.90)',
            'rgba(0,0,0,0.40)',
            'rgba(0,0,0,0.1)',
          ]}
          style={styles.pageStyle}>
          <Text style={{...Fonts.whiteColor30Medium}}>VidFlix</Text>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
