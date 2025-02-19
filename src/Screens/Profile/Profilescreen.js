import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {authActions} from '../../Store/auth-slice/authslice';
import {useNavigation} from '@react-navigation/native';

import COLORS from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogOutIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WatchIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FONT_SIZES from '../../constants/text';
import MoviesList from '../../Components/Movies/MoviesList/MoviesList';
import CustomModal from '../../Components/Modal/CustomModal';

const Profilescreen = () => {
  const logedInUser = useSelector(state => state.auth.logedinUser);
  const watchlist = useSelector(state => state.movies.watchlistMovies);
 
  const [isWatchlist, setIsWatchlist] = useState(false);
  const [visible, setIsVisible] = useState(false);
 
  const dispatch = useDispatch();
  const naviagation = useNavigation();

  // console.log(logedInUser)

  const handleWatchlist = () => {
    setIsWatchlist(true);
  };

  const logoutHandle = () => {
    dispatch(authActions.setLogOutUser());
    console.log('logout');
  };

  const deleteUserHandle = id => {
    // console.log(id)
    dispatch(authActions.deleteUser(id));
    dispatch(authActions.setLogOutUser());
  };

  const isModalisOpen = () => {
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <TouchableOpacity
          onPress={() => naviagation.goBack()}
          style={styles.backButton}>
          <Ionicons name="chevron-back" size={40} color={COLORS.PRIMARY} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>Profile</Text>
      </View>
      <CustomModal
        isVisible={visible}
        message={'Are you sure you want to delete?'}
        deleteUserHandle={deleteUserHandle}
        onClose={() => setIsVisible(false)}
      />

      <View style={styles.profileCard}>
        <Image
          source={require('../../assets/images/profile.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.texts}>{logedInUser?.name}</Text>
        <Text style={styles.texts}>{logedInUser?.number}</Text>
      </View>
      <View style={styles.buttons}>
        <LogOutIcon
          name="logout"
          style={styles.icons}
          size={35}
          onPress={() => logoutHandle()}
        />
        <DeleteIcon
          name="delete-outline"
          style={styles.icons}
          size={35}
          onPress={isModalisOpen}
        />
        <WatchIcon
          name="bookmark-outline"
          style={styles.icons}
          size={35}
          onPress={() => handleWatchlist()}
        />
      </View>
      {isWatchlist && (
        <View>
          <Text style={styles.watchtext}>Watchlist</Text>
          <MoviesList item={watchlist} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 25,
    paddingHorizontal: 15,
    backgroundColor: COLORS.BACKGROUND,
  },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  pageTitle: {
    fontSize: FONT_SIZES.APP_TITLE,
    color: COLORS.TEXT_PRIMARY,
    fontWeight: 'bold',
    marginHorizontal: 1,
    alignSelf: 'auto',
  },
  profileCard: {
    padding: 10,
    marginVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 30,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 10,
  },
  texts: {
    fontSize: FONT_SIZES.SUBTITLE,
    color: COLORS.TEXT_PRIMARY,
    fontWeight: 'bold',
  },
  buttons: {
    padding: 20,
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    shadowColor: COLORS.SHADOW,
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 15,

    elevation: 10,
  },
  icons: {
    color: COLORS.BUTTON_PRIMARY,
    shadowColor: '#3bf0e1',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  },
  watchtext: {
    marginVertical: 15,
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZES.BODY_TEXT + 5,
  },
});

export default Profilescreen;
