/**
 * @format
 */
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/Store/Store';
import { Provider } from 'react-redux';

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Application);
