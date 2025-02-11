import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import Appnavigationstack from './src/Navigations/Appnavigationstack'


const App = () => {
  
  return (
    <>
    <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
          <Appnavigationstack/>
      </NavigationContainer>  
    </GestureHandlerRootView>
     
      </>
  )
}

export default App