import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Appnavigationstack from './src/Navigations/Appnavigationstack';
import CustomToast from './src/Components/Toast/CustomeToast';

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Appnavigationstack />
        </NavigationContainer>
        <CustomToast />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
