import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {Colors, Fonts, Sizes} from '../../constant/styles';

const LoginScreen = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    backClickCount: 0,
  });

  const updateState = data => setState(state => ({...state, ...data}));

  const {email, password, backClickCount} = state;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/bg.jpg')}
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
          style={{flex: 1, paddingHorizontal: Sizes.fixPadding * 2.0}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: StatusBar.currentHeight + 10.0,
            }}>
            {welcomeInfo()}
            {emailTextField()}
            {passwordTextField()}
            {loginButton()}
            {forgotText()}
            {dontHaveAnAccountButton()}
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
      {backClickCount == 1 ? (
        <View style={[styles.animatedView]}>
          <Text style={{...Fonts.whiteColor15Regular}}>
            Press Back Once Again to Exit
          </Text>
        </View>
      ) : null}
    </SafeAreaView>
  );

  function forgotText() {
    return (
      <Text
        style={{
          ...Fonts.whiteColor20Medium,
          textAlign: 'center',
          marginVertical: Sizes.fixPadding,
        }}>
        Forgot your password?
      </Text>
    );
  }

  function dontHaveAnAccountButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={[
            'rgba(244, 67, 54, 0.3)',
            'rgba(244, 67, 54, 0.6)',
            'rgba(255, 118, 117, 0.55)',
          ]}
          style={styles.buttonStyle}>
          <Text style={{...Fonts.whiteColor20Medium}}>Don't have account?</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function loginButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('CreateAccount');
        }}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={[
            'rgba(244, 67, 54, 0.4)',
            'rgba(244, 67, 54, 0.6)',
            'rgba(255, 118, 117, 0.55)',
          ]}
          style={styles.buttonStyle}>
          <Text style={{...Fonts.whiteColor20Medium}}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function passwordTextField() {
    return (
      <View style={styles.textFieldContentStyle}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => updateState({password: text})}
          placeholderTextColor={Colors.whiteColor}
          style={{...Fonts.whiteColor20Medium}}
          cursorColor={Colors.primaryColor}
          secureTextEntry={true}
        />
      </View>
    );
  }

  function emailTextField() {
    return (
      <View style={styles.textFieldContentStyle}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => updateState({email: text})}
          placeholderTextColor={Colors.whiteColor}
          style={{...Fonts.whiteColor20Medium}}
          cursorColor={Colors.primaryColor}
          keyboardType="email-address"
        />
      </View>
    );
  }

  function welcomeInfo() {
    return (
      <View
        style={{
          marginBottom: Sizes.fixPadding * 5.0,
          marginTop: Sizes.fixPadding * 4.0,
        }}>
        <Text style={{...Fonts.whiteColor35Medium}}>Welcome back</Text>
        <Text style={{...Fonts.whiteColor20Light}}>Login in your account</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  animatedView: {
    backgroundColor: '#333333',
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    borderRadius: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldContentStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: Sizes.fixPadding + 10.0,
    paddingVertical: Sizes.fixPadding + 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding,
  },
  buttonStyle: {
    alignItems: 'center',
    borderRadius: Sizes.fixPadding + 15.0,
    paddingVertical: Sizes.fixPadding + 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding + 10.0,
  },
});

export default LoginScreen;
