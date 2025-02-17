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
import Toast from 'react-native-toast-message';

const {width, height} = Dimensions.get('window');

const MovieItem = ({item}) => {
  const dispatch = useDispatch();
  const toastMessage = useSelector(state => state.movies.toastMessage);
  const navigation = useNavigation();
  const route = useRoute();

  const switchToDetailPageHandler = id => {
   
    dispatch(moviesActions.setClearMovieDetails())

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
    if (toastMessage === 'Succesfully added Favorite') {
      Toast.show({
        type: 'success',
        text1: toastMessage,
        text2: `Added Movie Favorite`,
      });
    } else if (toastMessage === 'Succesfully Removed Movie Favorite list') {
      Toast.show({
        type: 'error',
        text1: toastMessage,
        text2: `Removed Movie Favorite`,
      });
    }

    dispatch(moviesActions.setMovieFavoriteList(item));
  };

  const addWatchlistHandler = item => {
    if (toastMessage === 'Movie added to watchlist') {
      Toast.show({
        type: 'success',
        text1: toastMessage,
        text2: `Added Movie watchlist`,
      });
    } else if (toastMessage === 'Movie removed from watchlist') {
      Toast.show({
        type: 'error',
        text1: toastMessage,
        text2: `Removed Movie from watchlist`,
      });
    }
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
            <View style={styles.buttonSection}>
              <Buttoncompo onPress={() => addWatchlistHandler(item)}>
                <Fontisto name="favorite" size={20} color="white" />
              </Buttoncompo>
              <Buttoncompo onPress={() => addFavoriteListHanlder(item)}>
                <AntDesign name="heart" size={20} color="white" />
              </Buttoncompo>
            </View>
          </View>
        </TouchableOpacity>
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
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  movieRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffd700',
  },
});

export default MovieItem;
