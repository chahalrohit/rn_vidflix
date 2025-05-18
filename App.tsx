import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {LogBox} from 'react-native';
import BottomTabBarScreen from './src/component/bottomTabBarScreen';
import LoadingScreen from './src/component/loadingScreen';
import AppSettingScreen from './src/screens/appSetting/appSettingScreen';
import CreateAccountScreen from './src/screens/auth/createAccountScreen';
import LoginScreen from './src/screens/auth/loginScreen';
import ResetPasswordScreen from './src/screens/auth/resetPasswordScreen';
import CategoryScreen from './src/screens/category/categoryScreen';
import EditProfileScreen from './src/screens/editProfile/editProfileScreen';
import MoreMoviesScreen from './src/screens/moreMovies/moreMoviesScreen';
import NotificationScreen from './src/screens/notification/notificationScreen';
import PrivacyPolicyScreen from './src/screens/privacyPolicy/privacyPolicyScreen';
import ShowEpisodeScreen from './src/screens/showEpisode/showEpisodeScreen';
import SplashScreen from './src/screens/splashScreen';
import WebSeriesScreen from './src/screens/webSeries/webSeriesScreen';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{...TransitionPresets.DefaultTransition}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBarScreen}
          options={{...TransitionPresets.DefaultTransition}}
        />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="MoreMovies" component={MoreMoviesScreen} />
        <Stack.Screen name="WebSeries" component={WebSeriesScreen} />
        <Stack.Screen name="ShowEpisode" component={ShowEpisodeScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="AppSetting" component={AppSettingScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
