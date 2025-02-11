import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import IMAGES, { image500 } from '../../constants/images'

const {width, height} = Dimensions.get('window')

const CarouselItem = ({item}) => {
    console.log(item)

  return (
    <View>
    <ImageBackground  source={{uri: image500(item.poster_path)}} style={styles.imageBackground} resizeMode='stretch'>
        <View style={styles.overlay}>
           <Text>data</Text> 
        </View>
    </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    imageBackground: {
        width: width * 1,
        height: 560,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        overflow: "hidden", 
      },
      overlay: {
        flex: 1,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.3)", 
        justifyContent: "center",
        alignItems: "center",
      },
})

export default CarouselItem