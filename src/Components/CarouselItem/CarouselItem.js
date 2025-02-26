import React from 'react'
import {  Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import  { image500 } from '../../constants/images'
import { setClearMovieDetails } from '../../Store/movie-slice/movieslice'

import COLORS from '../../constants/colors'

const {width, height} = Dimensions.get('window')

const CarouselItem = ({item}) => {
  const loading = useSelector(state => state.movies.loading)
  const navigation = useNavigation()
  const dispatch =  useDispatch()

  const switchToDetailPageHandler =(id)=>{
      
      dispatch(setClearMovieDetails());
    
      navigation.navigate('Detailscreen', {id:id})
  }

  return (
    <View style={styles.container}>
    {/* {!loading ? <ActivityIndicator size='large' style={{flex:1}}/>
    : */}
    <ImageBackground  source={{uri: image500(item?.poster_path)}} style={styles.imageBackground} resizeMode='stretch'>
         <View style={styles.box}>
         <TouchableOpacity activeOpacity={0.6} onPress={() => switchToDetailPageHandler(item.id)}>
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.movieTitle}>{item?.title}</Text>
              <Text style={styles.movieDescription} numberOfLines={3}>
                {item?.overview}
              </Text>
              <View style={styles.bottomSection}>
                <Text style={styles.movieRating}>
                  IMDb: {item?.vote_average.toFixed(1)}
                </Text>
              </View>
            </View>
        </TouchableOpacity>
        </View>
    </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        height: height * 0.4 
      },
    imageBackground: {
        width: width * 1,
        height: 560,
        justifyContent: 'flex-end',
        padding: 10,
        borderRadius:15,
        overflow: "hidden", 
      },
      overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
      box:{
        marginVertical:30
      },
      textContainer: {
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.TEXT_PRIMARY,
        marginBottom: 5,
      },
      movieDescription: {
        fontSize: 16,
        color: COLORS.TEXT_SECONDARY,
        marginBottom: 10,
      },
      bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      movieRating: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffd700',
      },
     
})

export default CarouselItem