import React from 'react';
import {image500} from '../../constants/images';
import {Image, StyleSheet, Text, View} from 'react-native';

const Searchlist = ({item}) => {
  const {title, overview, poster_path, vote_average, release_date} = item;
  
  return (
    <View style={styles.containerList}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: poster_path ? image500(poster_path) : 'placeholder_image_url',
        }}
        resizeMode="cover"
      />
      <View style={styles.textSection}>
        <Text style={styles.moviesTitle} numberOfLines={1}>
          {title || 'No Title Available'}
        </Text>
        <Text style={styles.moviesDescription} numberOfLines={5}>
          {overview || 'No description available.'}
        </Text>
        <View style={styles.bottomSection}>
          <Text style={styles.movieDate}>Date: {release_date || 'N/A'}</Text>
          <Text style={styles.movieRating}>
            IMDb rating: {vote_average ? vote_average.toFixed(1) : 'N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  imageStyle: {
    width: 130,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  textSection: {
    flex: 1,
    paddingHorizontal: 10,
  },
  moviesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#090909',
    backgroundColor: 'white',
    marginBottom: 5,
  },
  moviesDescription: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 10,
  },
  bottomSection: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  movieRating: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#d4c04d',
    color: 'black',
  },
  movieDate: {
    fontSize: 14,
    backgroundColor: 'black',
    color: '#c0a914',
  },
});

export default Searchlist;
