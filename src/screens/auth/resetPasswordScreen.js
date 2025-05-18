import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {Fonts, Colors, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ResetPasswordScreen = ({navigation}) => {
  const [state, setState] = useState({
    registeredEmail: '',
  });

  const updateState = data => setState(state => ({...state, ...data}));

  const {registeredEmail} = state;

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
            {resetPasswordInfo()}
            {registeredEmailTextField()}
            {resetPasswordButton()}
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );

  function resetPasswordButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('BottomTabBar');
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
          <Text style={{...Fonts.whiteColor20Medium}}>Reset password</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  function registeredEmailTextField() {
    return (
      <View style={styles.textFieldContentStyle}>
        <TextInput
          placeholder="Enter Registered Email"
          value={registeredEmail}
          onChangeText={text => updateState({registeredEmail: text})}
          placeholderTextColor={Colors.whiteColor}
          style={{...Fonts.whiteColor20Medium, flex: 1}}
          cursorColor={Colors.primaryColor}
          keyboardType="email-address"
        />
      </View>
    );
  }

  function resetPasswordInfo() {
    return (
      <View
        style={{
          marginBottom: Sizes.fixPadding * 5.0,
          marginTop: Sizes.fixPadding * 7.0,
        }}>
        <Text style={{...Fonts.whiteColor35Medium}}>Lost Password?</Text>
        <Text style={{...Fonts.whiteColor20Light}}>
          Don't worry we are here
        </Text>
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
    marginVertical: Sizes.fixPadding + 10.0,
  },
});

export default ResetPasswordScreen;
