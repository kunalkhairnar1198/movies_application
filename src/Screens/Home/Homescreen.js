import {  Dimensions, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendingMovies } from '../../Store/movie-slice/movieslice'
import Carousel from 'react-native-reanimated-carousel'
import { useSharedValue } from 'react-native-reanimated'
import { useEffect } from 'react'
import CarouselItem from '../../Components/CarouselItem/CarouselItem'


const width = Dimensions.get('window').width


const data = [
  { id: "1", color: "#B0604D", text: "Slide 1" },
  { id: "2", color: "#899F9C", text: "Slide 2" },
  { id: "3", color: "#B3C680", text: "Slide 3" },
  { id: "4", color: "#5C6265", text: "Slide 4" },
  { id: "5", color: "#F5D399", text: "Slide 5" },
];


const Homescreen = () => {
  const TrendingMovies = useSelector(state => state.movies.trendingMovies)
  const dispatch = useDispatch()
    const progress = useSharedValue(0);
  

  console.log(TrendingMovies)

  useEffect(()=>{
    dispatch(getTrendingMovies())
  },[])

  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    <SafeAreaView style={styles.container}>
      <View style={styles.containerc}>
            <Carousel
              data={TrendingMovies}
              width={width}
              height={500}
              loop
              // autoPlay
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
    <View style={styles.itemContainer}>
    <Text style={{color:'white'}}>Homescreen</Text>    
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.BACKGROUND,
    },
    containerc: {
      flex: 1,
      justifyContent: "flex-start",
      // alignItems: 'flex-start',
    }, 
    text: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
   
})

export default Homescreen