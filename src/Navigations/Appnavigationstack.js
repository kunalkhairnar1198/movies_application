import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Authstack from './AuthStack/Authstack';

const Stack = createStackNavigator()

const Appnavigationstack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Authstack' component={Authstack}/>
        </Stack.Navigator>
  )
}

export default Appnavigationstack