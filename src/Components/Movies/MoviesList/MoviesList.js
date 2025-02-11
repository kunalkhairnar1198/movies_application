import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MovieItem from '../Moviesitem/MovieItem'

const MoviesList = ({popularMovies}) => {
    // console.log(popularMovies)

  return (
    <View style={styles.container}>
    <FlatList
      data={popularMovies}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <MovieItem item={item}/>
    )}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingBottom: 15,
    },
    flatListContent: {
        paddingHorizontal: 10,
    },
})

export default MoviesList