import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../constants/colors'

const Loader = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size='large' color={COLORS.PRIMARY}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#00000059'
      },
      transparentBox: {
        padding: 20,
        backgroundColor: 'transparent',
        marginBottom: 20,
      },
})

export default Loader