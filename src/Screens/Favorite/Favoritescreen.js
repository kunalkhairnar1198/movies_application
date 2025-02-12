import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

const Favoritescreen = () => {
  return (
    <View style={styles.container}>
           <Text>Favoritescreen</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.BACKGROUND
  }
})

export default Favoritescreen