import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {getLogoImage, image500} from '../../constants/images';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getDetailMovies, moviesActions} from '../../Store/movie-slice/movieslice';

import FONT_SIZES from '../../constants/text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/colors';
import Buttoncompo from '../../Components/Button/Buttoncompo';
import Toast from 'react-native-toast-message';

const Detailsscreen = ({route}) => {
  const moviesDetails = useSelector(state => state.movies.detailsMovie);
  const moviesCast = useSelector(state => state.movies.castCredit);
  const toastMessage = useSelector(state => state.movies.toastMessage)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {id} = route.params


  useEffect(()=>{
    dispatch(getDetailMovies(id))
  },[id])

  useEffect(() => {

    const header = navigation.getParent()?.setOptions({headerShown: false});
    if (moviesDetails) {
      navigation.setOptions({title: `${moviesDetails?.original_title}`});
    }
    return () => {
      navigation.getParent()?.setOptions({headerShown: false});
    };
  }, [navigation, moviesDetails]);



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
      console.log(item)
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
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: image500(moviesDetails?.backdrop_path)}}
        resizeMode="stretch"
      />
      <View style={styles.detailSection}>
        <Text style={styles.title}>{moviesDetails?.title}</Text>
        <View style={styles.dateratingsection}>
          <Text style={styles.date}>
            Released {moviesDetails?.release_date}
          </Text>
          <Text style={styles.date}>
            IMDb Rating <Icon name="star" size={15} color="#e9f01e" />{' '}
            {moviesDetails?.vote_average}
          </Text>
        </View>

        <Text style={styles.description}>{moviesDetails?.overview}</Text>

        <View style={styles.generessection}>
          <Text style={{color: 'white'}}>Genres</Text>
          {moviesDetails?.genres?.map(item => (
            <Text key={item?.id} style={styles.list}>
              {item?.name}
            </Text>
          ))}
        </View>

        <View style={styles.countriessection}>
          <Text style={styles.countrititle}>Countries</Text>
          {moviesDetails?.production_countries?.map((item, index) => (
            <Text key={index} style={styles.list}>
              {item?.name}
            </Text>
          ))}
        </View>

        <View style={styles.languagesection}>
          <Text style={styles.langtitle}>Language</Text>
          {moviesDetails?.spoken_languages?.map((item, index) => (
            <Text key={index} style={styles.list}>
              {item?.name}
            </Text>
          ))}
        </View>

        <View style={styles.buttonSection}>
          <Buttoncompo onPress={()=>addWatchlistHandler(moviesDetails)}>
            <Fontisto name="favorite" size={30} color="white" />
          </Buttoncompo>
          <Buttoncompo onPress={()=>addFavoriteListHanlder(moviesDetails)}>
            <AntDesign name="heart" size={30} color="white" />
          </Buttoncompo>
        </View>

        <View style={styles.productcontainer}>
          <Text style={styles.protitle}>Production</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {moviesDetails?.production_companies?.map((item, index) => (
              <View key={index} style={styles.prodcircle}>
                {item.logo_path && (
                  <Image
                    source={{uri: getLogoImage(item?.logo_path)}}
                    style={styles.imagescroll}
                  />
                )}
                <Text style={styles.prodname}>{item?.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.castcontainer}>
          <Text style={styles.casttitle}>Cast</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {moviesCast?.cast?.map((item, index) => (
              <View key={index}>
                {item?.profile_path && (
                  <>
                    <Image
                      source={{uri: image500(item?.profile_path)}}
                      style={styles.imagecastscroll}
                    />
                    <Text style={styles.castname}>{item.name}</Text>
                  </>
                )}
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.castcontainer}>
          <Text style={styles.casttitle}>Crew</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {moviesCast?.crew?.map((item, index) => (
              <View key={index}>
                {item?.profile_path && (
                  <>
                    <Image
                      source={{uri: image500(item?.profile_path)}}
                      style={styles.imagecastscroll}
                    />
                    <Text style={styles.castname}>{item.name}</Text>
                  </>
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  image: {
    width: '100%',
    height: 300,
  },
  detailSection: {
    backgroundColor: COLORS.BACKGROUND,
    padding: 20,
  },
  title: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZES.SUBTITLE + 11,
    fontWeight: '600',
  },
  dateratingsection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#7b616132',
    borderRadius: 30,
    padding: 5,
  },
  date: {
    color: COLORS.TEXT_PRIMARY,
  },
  description: {
    marginVertical: 10,
    textAlign: 'justify',
    color: COLORS.TEXT_MUTED,
    fontSize: FONT_SIZES.BODY_TEXT,
  },
  generessection: {
    flexDirection: 'row',
    backgroundColor: '#7b616132',
    borderRadius: 30,
    padding: 5,
  },
  list: {
    color: COLORS.TEXT_MUTED,
    marginHorizontal: 5,
  },
  countriessection: {
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 30,
    padding: 5,
  },
  countrititle: {
    fontSize: FONT_SIZES.BODY_TEXT + 2,
    color: COLORS.TEXT_PRIMARY,
  },
  languagesection: {
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 30,
    padding: 5,
  },
  langtitle: {
    fontSize: FONT_SIZES.BODY_TEXT + 2,
    color: COLORS.TEXT_PRIMARY,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
  },
  productcontainer: {
    marginVertical: 20,
  },
  protitle: {
    fontSize: FONT_SIZES.BODY_TEXT + 2,
    color: COLORS.TEXT_PRIMARY,
  },
  prodcircle: {
    marginRight: 10,
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
  prodname: {
    fontSize: FONT_SIZES.BUTTON_TEXT,
    color: 'black',
  },
  castcontainer: {
    marginVertical: 10,
  },
  casttitle: {
    fontSize: FONT_SIZES.BODY_TEXT + 2,
    color: COLORS.TEXT_PRIMARY,
  },
  imagecastscroll: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  castname: {
    fontSize: FONT_SIZES.BUTTON_TEXT,
    color: COLORS.TEXT_PRIMARY,
    marginTop: 5,
  },
});

export default Detailsscreen;
