import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomSheet} from '@rneui/themed';
import Dialog from 'react-native-dialog';

const {width} = Dimensions.get('screen');

const EditProfileScreen = ({navigation}) => {
  const [state, setState] = useState({
    phoneDialog: false,
    phoneNumber: '98765432210',
    changePhoneNumber: '9603456878',
    emailDialog: false,
    email: 'test@abc.com',
    changeEmail: 'test@abc.com',
    passwordDialog: false,
    password: '******',
    changePassword: '123456',
    showBottomSheet: false,
  });

  const updateState = data => setState(state => ({...state, ...data}));

  const {
    phoneDialog,
    phoneNumber,
    changePhoneNumber,
    emailDialog,
    email,
    changeEmail,
    passwordDialog,
    password,
    changePassword,
    showBottomSheet,
  } = state;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
      <View style={{backgroundColor: Colors.blackColor, flex: 1}}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {changeProfilePhotoInfo()}
          {settingInfo({title: 'Phone Number', value: phoneNumber, index: 1})}
          {settingInfo({title: 'Email', value: email, index: 2})}
          {settingInfo({title: 'Password', value: '******', index: 3})}
        </ScrollView>
      </View>
      {changeProfileOptions()}
      {editPhoneDialog()}
      {editEmailDialog()}
      {editPasswordDialog()}
    </SafeAreaView>
  );

  function editPasswordDialog() {
    return (
      <Dialog.Container
        visible={passwordDialog}
        contentStyle={styles.dialogContainerStyle}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...Fonts.blackColor20Medium,
              paddingBottom: Sizes.fixPadding + 5.0,
            }}>
            Change Your Password
          </Text>
          <View
            style={{
              borderBottomColor: '#9E9E9E',
              borderBottomWidth: 0.5,
              width: '100%',
            }}>
            <TextInput
              style={{
                ...Fonts.blackColor16Medium,
                paddingBottom: Sizes.fixPadding,
              }}
              placeholder="Old Password"
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              borderBottomColor: '#9E9E9E',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: Sizes.fixPadding,
            }}>
            <TextInput
              onChangeText={value => updateState({changePassword: value})}
              style={{
                ...Fonts.blackColor16Medium,
                paddingBottom: Sizes.fixPadding,
              }}
              placeholder="New Password"
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              borderBottomColor: '#9E9E9E',
              borderBottomWidth: 0.5,
              width: '100%',
              marginTop: Sizes.fixPadding,
            }}>
            <TextInput
              style={{
                ...Fonts.blackColor16Medium,
                paddingBottom: Sizes.fixPadding,
              }}
              placeholder="Confirm New Password"
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: Sizes.fixPadding * 2.0,
            }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => updateState({passwordDialog: false})}
              style={styles.cancelButtonStyle}>
              <Text style={{...Fonts.blackColor16Medium}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                updateState({
                  passwordDialog: false,
                  password: changePassword,
                });
              }}
              style={styles.okButtonStyle}>
              <Text style={{...Fonts.whiteColor16Medium}}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
    );
  }

  function changeProfileOptions() {
    return (
      <BottomSheet
        isVisible={showBottomSheet}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.50, 0, 0.50)'}}
        onBackdropPress={() => updateState({showBottomSheet: false})}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => updateState({showBottomSheet: false})}
          style={styles.bottomSheetContentStyle}>
          <Text style={{...Fonts.blackColor20Medium, textAlign: 'center'}}>
            Choose Option
          </Text>
          <View
            style={{
              backgroundColor: '#CFC6C6',
              height: 1.0,
              marginBottom: Sizes.fixPadding + 2.0,
              marginTop: Sizes.fixPadding - 5.0,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: Sizes.fixPadding * 2.0,
            }}>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color={Colors.blackColor}
            />
            <Text
              style={{
                ...Fonts.blackColor16Medium,
                marginLeft: Sizes.fixPadding,
              }}>
              Camera
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: Sizes.fixPadding,
              marginHorizontal: Sizes.fixPadding * 2.0,
            }}>
            <MaterialIcons
              name="photo-album"
              size={22}
              color={Colors.blackColor}
            />
            <Text
              style={{
                ...Fonts.blackColor16Medium,
                marginLeft: Sizes.fixPadding,
              }}>
              Choose from gallery
            </Text>
          </View>
        </TouchableOpacity>
      </BottomSheet>
    );
  }

  function editEmailDialog() {
    return (
      <Dialog.Container
        visible={emailDialog}
        contentStyle={styles.dialogContainerStyle}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...Fonts.blackColor20Medium,
              paddingBottom: Sizes.fixPadding + 5.0,
            }}>
            Change Email
          </Text>
          <View
            style={{
              borderBottomColor: '#9E9E9E',
              borderBottomWidth: 1.0,
              width: '100%',
            }}>
            <TextInput
              value={changeEmail}
              onChangeText={value => updateState({changeEmail: value})}
              style={{
                ...Fonts.blackColor16Medium,
                paddingBottom: Sizes.fixPadding,
              }}
            />
          </View>
          <View style={styles.okAndCancelButtonContainerStyle}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => updateState({emailDialog: false})}
              style={styles.cancelButtonStyle}>
              <Text style={{...Fonts.blackColor16Medium}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                updateState({
                  emailDialog: false,
                  email: changeEmail,
                });
              }}
              style={styles.okButtonStyle}>
              <Text style={{...Fonts.whiteColor16Medium}}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
    );
  }

  function editPhoneDialog() {
    return (
      <Dialog.Container
        visible={phoneDialog}
        contentStyle={styles.dialogContainerStyle}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...Fonts.blackColor20Medium,
              paddingBottom: Sizes.fixPadding + 5.0,
            }}>
            Change Phone Number
          </Text>
          <View
            style={{
              borderBottomColor: '#9E9E9E',
              borderBottomWidth: 1.0,
              width: '100%',
            }}>
            <TextInput
              value={changePhoneNumber}
              onChangeText={value => updateState({changePhoneNumber: value})}
              style={{
                ...Fonts.blackColor16Medium,
                paddingBottom: Sizes.fixPadding,
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.okAndCancelButtonContainerStyle}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => updateState({phoneDialog: false})}
              style={styles.cancelButtonStyle}>
              <Text style={{...Fonts.blackColor16Medium}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                updateState({
                  phoneDialog: false,
                  phoneNumber: changePhoneNumber,
                });
              }}
              style={styles.okButtonStyle}>
              <Text style={{...Fonts.whiteColor16Medium}}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog.Container>
    );
  }

  function settingInfo({title, value, index}) {
    return (
      <View style={{marginHorizontal: Sizes.fixPadding + 5.0}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                ...Fonts.whiteColor16Medium,
                marginTop: Sizes.fixPadding,
                marginBottom: Sizes.fixPadding - 5.0,
              }}>
              {title}
            </Text>
            <Text style={{...Fonts.grayColor15Regular}}>{value}</Text>
          </View>
          <MaterialIcons
            name="edit"
            size={30}
            color="#9E9E9E"
            onPress={() => {
              index == 1
                ? updateState({phoneDialog: true})
                : index == 2
                ? updateState({emailDialog: true})
                : updateState({passwordDialog: true});
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#9E9E9E',
            height: 0.3,
            marginVertical: Sizes.fixPadding,
          }}></View>
      </View>
    );
  }

  function changeProfilePhotoInfo() {
    return (
      <View
        style={{alignItems: 'center', marginBottom: Sizes.fixPadding * 2.5}}>
        <ImageBackground
          source={require('../../assets/images/user_profile/user.jpg')}
          style={styles.userProfilePhotoStyle}
          borderRadius={50.0}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => updateState({showBottomSheet: true})}
            style={styles.userProfilePhotoBlurContentStyle}>
            <MaterialCommunityIcons
              name="camera-plus"
              size={27}
              color={Colors.whiteColor}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={{...Fonts.whiteColor20Medium}}>Allison Perry</Text>
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerConentStyle}>
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={Colors.whiteColor}
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 10.0}}
        />
        <Text style={{...Fonts.whiteColor20Medium}}>Edit Profile</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerConentStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.blackColor,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
  },
  userProfilePhotoStyle: {
    width: 100.0,
    height: 100.0,
    borderRadius: 50.0,
    marginTop: Sizes.fixPadding * 2.5,
    marginBottom: Sizes.fixPadding + 5.0,
  },
  userProfilePhotoBlurContentStyle: {
    width: 100.0,
    height: 100.0,
    borderRadius: 50.0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheetContentStyle: {
    backgroundColor: Colors.whiteColor,
    paddingTop: Sizes.fixPadding + 5.0,
    paddingBottom: Sizes.fixPadding,
  },
  dialogContainerStyle: {
    borderRadius: Sizes.fixPadding,
    width: width - 70,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingTop: -Sizes.fixPadding,
    paddingBottom: Sizes.fixPadding * 2.0,
  },
  cancelButtonStyle: {
    flex: 0.5,
    backgroundColor: '#E0E0E0',
    borderRadius: Sizes.fixPadding - 5.0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Sizes.fixPadding,
    marginRight: Sizes.fixPadding + 5.0,
  },
  okButtonStyle: {
    flex: 0.5,
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Sizes.fixPadding + 5.0,
  },
  okAndCancelButtonContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Sizes.fixPadding * 2.0,
    marginHorizontal: Sizes.fixPadding + 5.0,
  },
});

export default EditProfileScreen;
