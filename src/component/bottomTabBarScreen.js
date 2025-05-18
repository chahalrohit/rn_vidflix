import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors, Fonts, Sizes} from '../constant/styles';
import AccountScreen from '../screens/account/accountScreen';
import HomeScreen from '../screens/home/homeScreen';
import SearchScreen from '../screens/search/searchScreen';
import WatchLaterScreen from '../screens/watchLater/watchLaterScreen';

const BottomTabBarScreen = ({navigation}) => {
  const [state, setState] = useState({
    currentIndex: 1,
    backClickCount: 0,
  });

  const updateState = data => setState(state => ({...state, ...data}));

  const {currentIndex, backClickCount} = state;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: Colors.blackColor}}>
        <StatusBar translucent={false} backgroundColor={Colors.blackColor} />
        {currentIndex == 1 ? (
          <HomeScreen navigation={navigation} />
        ) : currentIndex == 2 ? (
          <SearchScreen navigation={navigation} />
        ) : currentIndex == 3 ? (
          <WatchLaterScreen navigation={navigation} />
        ) : (
          <AccountScreen navigation={navigation} />
        )}
        <LinearGradient
          style={styles.bottomTabBarStyle}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={['black', 'rgba(0, 0, 0, 0.95)', 'rgba(0,0,0,0.89)']}>
          {bottomTabBarItem({
            index: 1,
            iconName: 'home',
            showText: 'Home',
          })}
          {bottomTabBarItem({
            index: 2,
            iconName: 'search',
            showText: 'Search',
          })}
          {bottomTabBarItem({
            index: 3,
            iconName: 'favorite-border',
            showText: 'Watch Later',
          })}
          {bottomTabBarItem({
            index: 4,
            iconName: 'person',
            showText: 'Account',
          })}
        </LinearGradient>
      </View>
      {backClickCount == 1 ? (
        <View style={[styles.animatedView]}>
          <Text style={{...Fonts.whiteColor15Regular}}>
            Press Back Once Again to Exit
          </Text>
        </View>
      ) : null}
    </SafeAreaView>
  );

  function bottomTabBarItem({index, iconName, showText}) {
    return currentIndex == index ? (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgba(244, 67, 54, 0.4)',
          borderRadius: Sizes.fixPadding * 3.0,
          paddingVertical: Sizes.fixPadding + 5.0,
          paddingHorizontal: Sizes.fixPadding * 3.0,
        }}>
        <MaterialIcons name={iconName} size={24} color={Colors.primaryColor} />
        <Text
          style={{
            ...Fonts.primaryColor16Medium,
            marginLeft: Sizes.fixPadding + 5.0,
          }}>
          {showText}
        </Text>
      </View>
    ) : (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => updateState({currentIndex: index})}>
        <MaterialIcons name={iconName} size={24} color={Colors.whiteColor} />
      </TouchableOpacity>
    );
  }
};

export default BottomTabBarScreen;

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
  bottomTabBarStyle: {
    position: 'absolute',
    bottom: 0.0,
    left: 0.0,
    right: 0.0,
    height: 65.0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Sizes.fixPadding + 5.0,
    borderTopRightRadius: Sizes.fixPadding,
    borderTopLeftRadius: Sizes.fixPadding,
  },
  bottomTabSelectedIconStyle: {
    height: 40.0,
    width: 40.0,
    borderRadius: 20.0,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
