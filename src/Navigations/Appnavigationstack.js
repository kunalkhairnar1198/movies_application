import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Authstack from './AuthStack/Authstack';
import TabNavigation from './TabNavigationstack/TabNavigation';

const Stack = createStackNavigator()

const Appnavigationstack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Authstack' component={Authstack}/>
            <Stack.Screen name='Hometab' component={TabNavigation}/>
        </Stack.Navigator>
  )
}

export default Appnavigationstack