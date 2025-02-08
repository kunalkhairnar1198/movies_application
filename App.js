import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Appnavigationstack from './src/Navigations/Appnavigationstack'


const App = () => {
  
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
          <Appnavigationstack/>
      </NavigationContainer>        
    </SafeAreaView>
  )
}

export default App