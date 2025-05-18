import React from 'react';
import {Text, View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors, Fonts, Sizes} from '../../constant/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PrivacyPolicyScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
      <View style={{flex: 1, backgroundColor: Colors.blackColor}}>
        {header()}
        {dummyText()}
      </View>
    </SafeAreaView>
  );

  function dummyText() {
    return (
      <Text
        style={{
          ...Fonts.whiteColor20Medium,
          textAlign: 'justify',
          marginHorizontal: Sizes.fixPadding + 5.0,
          marginVertical: Sizes.fixPadding * 2.0,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
    );
  }

  function header() {
    return (
      <View style={styles.headerConentStyle}>
        <MaterialIcons
          name="close"
          size={24}
          color={Colors.whiteColor}
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', left: 10.0}}
        />
        <Text style={{...Fonts.whiteColor20Medium}}>Privacy Policy</Text>
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
});

export default PrivacyPolicyScreen;
