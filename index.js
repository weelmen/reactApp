/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import StateProvider from './StateProvider';
import {name as appName} from './app.json';
import  React  from 'react';

AppRegistry.registerComponent(appName, () => StateProvider);
