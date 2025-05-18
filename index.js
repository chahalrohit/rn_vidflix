/**
 * @format
 */

import {Text, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.style = {fontFamily: 'Montserrat-Regular'};

AppRegistry.registerComponent(appName, () => App);
