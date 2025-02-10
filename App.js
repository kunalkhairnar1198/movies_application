import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Appnavigationstack from './src/Navigations/Appnavigationstack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import COLORS from './src/constants/colors'


const App = () => {
  
  return (
    <>
      <NavigationContainer>
          <Appnavigationstack/>
      </NavigationContainer>        
    </>
  )
}

export default App