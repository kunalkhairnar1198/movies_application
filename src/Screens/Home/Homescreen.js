import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {useSharedValue} from 'react-native-reanimated';
import {useEffect} from 'react';
import {
  getPopularMovies,
  getTopratedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '../../Store/movie-slice/movieslice';

import CarouselItem from '../../Components/CarouselItem/CarouselItem';
import MoviesList from '../../Components/Movies/MoviesList/MoviesList';
import Carousel from 'react-native-reanimated-carousel';
import COLORS from '../../constants/colors';
import FONT_SIZES from '../../constants/text';

const width = Dimensions.get('window').width;

const Homescreen = () => {
  const TrendingMovies = useSelector(state => state.movies.trendingMovies);
  const PopularMovies = useSelector(state => state.movies.popularMovies);
  const TopRatedMovies = useSelector(state => state.movies.top_ratedMovies);
  const upComingMovies = useSelector(state => state.movies.upComingMovies);
  const loading = useSelector(state => state.movies.loading)
  const dispatch = useDispatch();
  const progress = useSharedValue(0);
  console.log(loading)
  // console.log(TopRatedMovies)
  // console.log(TrendingMovies)
  // console.log(PopularMovies)

  useEffect(() => {
    dispatch(getTrendingMovies());
    dispatch(getPopularMovies());
    dispatch(getTopratedMovies());
    dispatch(getUpcomingMovies());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
        {!loading ? <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>: 
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
            renderItem={({item}) => <CarouselItem item={item} />}
          />
          }
          </View>

        <View style={styles.popularMovies}>
          <Text style={styles.texttitle}>Popular Movies</Text>
          <MoviesList item={PopularMovies} />
        </View>
        <View style={styles.popularMovies}>
          <Text style={styles.texttitle}>Top-Rated Movies</Text>
          <MoviesList item={TopRatedMovies} />
        </View>
        <View style={styles.popularMovies}>
          <Text style={styles.texttitle}>Uppcoming Movies</Text>
          <MoviesList item={upComingMovies} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BACKGROUND,
  },
  popularMovies: {
    paddingTop: 30,
  },
  texttitle: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.SUBTITLE + 2,
    color: COLORS.TEXT_PRIMARY,
  },
  loadingContainer: {
    flex: 1,
    marginTop:100
  },
});

export default Homescreen;
