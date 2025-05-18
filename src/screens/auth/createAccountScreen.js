import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CreateAccountScreen = ({navigation}) => {
  const [state, setState] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const updateState = data => setState(state => ({...state, ...data}));

  const {userName, email, password, confirmPassword} = state;

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
            {backArrow()}
            {createAccountInfo()}
            {userNameTextField()}
            {emailTextField()}
            {passwordTextField()}
            {confirmPasswordTextField()}
            {createAccountButton()}
            {alreadyHaveAccountButton()}
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );

  function alreadyHaveAccountButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('ResetPassword');
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
          <Text style={{...Fonts.whiteColor20Medium}}>
            Already have account
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function createAccountButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('ResetPassword');
        }}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={[
            'rgba(244, 67, 54, 0.3)',
            'rgba(244, 67, 54, 0.6)',
            'rgba(255, 118, 117, 0.55)',
          ]}
          style={{...styles.buttonStyle, marginTop: Sizes.fixPadding + 15.0}}>
          <Text style={{...Fonts.whiteColor20Medium}}>Create Account</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function confirmPasswordTextField() {
    return (
      <View style={styles.textFieldContentStyle}>
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={text => updateState({confirmPassword: text})}
          placeholderTextColor={Colors.whiteColor}
          style={{...Fonts.whiteColor20Medium, flex: 1}}
          cursorColor={Colors.primaryColor}
          secureTextEntry={true}
        />
      </View>
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
          style={{...Fonts.whiteColor20Medium, flex: 1}}
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
          style={{...Fonts.whiteColor20Medium, flex: 1}}
          cursorColor={Colors.primaryColor}
          keyboardType="email-address"
        />
      </View>
    );
  }

  function userNameTextField() {
    return (
      <View style={styles.textFieldContentStyle}>
        <TextInput
          placeholder="UserName"
          value={userName}
          onChangeText={text => updateState({userName: text})}
          placeholderTextColor={Colors.whiteColor}
          style={{...Fonts.whiteColor20Medium, flex: 1}}
          cursorColor={Colors.primaryColor}
        />
      </View>
    );
  }

  function createAccountInfo() {
    return (
      <View
        style={{
          marginBottom: Sizes.fixPadding * 5.0,
          marginTop: Sizes.fixPadding * 7.0,
        }}>
        <Text style={{...Fonts.whiteColor35Medium}}>Don't have account?</Text>
        <Text style={{...Fonts.whiteColor20Light}}>Create Account</Text>
      </View>
    );
  }

  function backArrow() {
    return (
      <MaterialIcons
        name="arrow-back"
        size={24}
        color={Colors.whiteColor}
        onPress={() => navigation.goBack()}
        style={{position: 'absolute', top: StatusBar.currentHeight + 10.0}}
      />
    );
  }
};

const styles = StyleSheet.create({
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
    marginVertical: Sizes.fixPadding + 5.0,
  },
});

export default CreateAccountScreen;
