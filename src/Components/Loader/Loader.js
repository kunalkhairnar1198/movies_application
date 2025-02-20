import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loader = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size='large' color='red'/>
    </View>
        //  <View style={styles.transparentBox}>
        //    <Text style={styles.text}>This text has a transparent background</Text>
        //  </View>
        //  <View style={styles.coloredBox}>
        //    <Text style={styles.text}>This text has a colored background</Text>
        //  </View>
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