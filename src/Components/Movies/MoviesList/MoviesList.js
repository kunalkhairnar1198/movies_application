import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import MovieItem from '../Moviesitem/MovieItem'
import COLORS from '../../../constants/colors'

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
      ListEmptyComponent={
        <View>
          <Text style={styles.emptyComponent}>No Moveis Found</Text>
        </View>
      }
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
    emptyComponent:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        color:COLORS.TEXT_PRIMARY
    }
})

export default MoviesList