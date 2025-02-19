import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {image500} from '../../../constants/images';
import {useDispatch, useSelector} from 'react-redux';
import {moviesActions} from '../../../Store/movie-slice/movieslice';
import {useNavigation, useRoute} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Buttoncompo from '../../Button/Buttoncompo';

const {width, height} = Dimensions.get('window');

const MovieItem = ({item}) => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();

  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);
  const watchlistMovies = useSelector(state => state.movies.watchlistMovies);

  const isFavorite = favoriteMovies.some(movie => movie.id === item.id);
  const isInWatchlist = watchlistMovies.some(movie => movie.id === item.id);

  // console.log(isFavorite, isInWatchlist)

  const switchToDetailPageHandler = id => {
    dispatch(moviesActions.setClearMovieDetails());

    if (route.name === 'Profile' || route.name === 'Favorite') {
      navigation.navigate('Homestack', {
        screen: 'Detailscreen',
        params: {id: id},
      });
    } else {
      navigation.navigate('Detailscreen', {id: id});
    }
    // console.log('detailscreen',navigation)
  };

  const addFavoriteListHanlder = item => {
    dispatch(moviesActions.setMovieFavoriteList(item));
  };

  const addWatchlistHandler = item => {
    dispatch(moviesActions.setMovieWatchList(item));
  };

  return (
    <View
      style={[
        styles.cardContainer,
        {width: width * 0.4, height: height * 0.3},
      ]}>
      <ImageBackground
        source={{uri: image500(item?.poster_path)}}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}>
        <TouchableOpacity onPress={() => switchToDetailPageHandler(item.id)}>
          <View style={styles.textContainer}>
            <Text style={styles.movieTitle}>{item?.title}</Text>
            <View style={styles.bottomSection}>
              <Text style={styles.movieRating}>
                IMDb: {item?.vote_average?.toFixed(1)}
              </Text>
            </View>
           
          </View>
        </TouchableOpacity>
        <View style={styles.buttonSection}>
              <Buttoncompo onPress={() => addWatchlistHandler(item)}>
                <Fontisto
                  name="favorite"
                  size={25}
                  color={isInWatchlist ? 'red' : 'white'}
                />
              </Buttoncompo>
              <Buttoncompo onPress={() => addFavoriteListHanlder(item)}>
                <AntDesign
                  name="heart"
                  size={25}
                  color={isFavorite ? 'red' : 'white'}
                />
              </Buttoncompo>
            </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  imageStyle: {
    borderRadius: 15,
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    padding: 10,
    borderRadius: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 10,
  },  
  movieRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffd700',
  },
});

export default MovieItem;
