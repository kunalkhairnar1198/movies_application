import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigationstack/TabNavigation';
import {useSelector} from 'react-redux';
import Authstack from './AuthStack/Authstack';

const Stack = createStackNavigator();

const Appnavigationstack = () => {
  const isLogedInUser = useSelector(state => state.auth.logedinUser);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLogedInUser ? (
        <Stack.Screen name="Authstack" component={Authstack} />
      ) : (
        <Stack.Screen name="Hometab" component={TabNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default Appnavigationstack;
