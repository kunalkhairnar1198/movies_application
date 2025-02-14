import {  Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import {  useSharedValue } from 'react-native-reanimated'
import { useEffect } from 'react'
import { getPopularMovies, getTrendingMovies } from '../../Store/movie-slice/movieslice'

import CarouselItem from '../../Components/CarouselItem/CarouselItem'
import MoviesList from '../../Components/Movies/MoviesList/MoviesList'
import Carousel from 'react-native-reanimated-carousel'
import COLORS from '../../constants/colors'
import FONT_SIZES from '../../constants/text'


const width = Dimensions.get('window').width


const Homescreen = () => {
  const TrendingMovies = useSelector(state => state.movies.trendingMovies)
  const PopularMovies = useSelector(state => state.movies.popularMovies)

  const dispatch = useDispatch()
  const progress = useSharedValue(0);
  

  // console.log(TrendingMovies)
  // console.log(PopularMovies)

  useEffect(()=>{
    dispatch(getTrendingMovies())
    dispatch(getPopularMovies())
  },[])

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View >
            <Carousel
              data={TrendingMovies}
              width={width}
              height={500}
              loop
              autoPlay
              autoPlayInterval={2000}
              mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
              }}
              onProgressChange={progress}
              renderItem={({ item }) => (
                  <CarouselItem item={item}/>
              )}
            />
      </View>

        <View style={styles.popularMovies}>
          <Text style={styles.texttitle}>Popular Movies</Text>
          <MoviesList popularMovies={PopularMovies} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:COLORS.BACKGROUND,
        // padding:10
    },
    popularMovies:{
      marginVertical:30
    },
    texttitle:{
      paddingHorizontal:10,
      fontWeight:'bold',
      fontSize:FONT_SIZES.SUBTITLE,
      color:COLORS.TEXT_PRIMARY,
    }
   
})

export default Homescreen