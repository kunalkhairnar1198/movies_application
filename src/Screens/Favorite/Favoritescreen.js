import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import MovieItem from '../../Components/Movies/Moviesitem/MovieItem'
import COLORS from '../../constants/colors'
import FONT_SIZES from '../../constants/text'

const Favoritescreen = () => {
    const favoriteMovies = useSelector(state => state.movies.favoriteMovies)
    // console.log(favoriteMovies)

  return (
    <View style={styles.container}>
      <FlatList
      data={favoriteMovies}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <MovieItem item={item}/>
    )}
    
      showsHorizontalScrollIndicator={false}
      numColumns={2} 
      columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 14 }} 
      contentContainerStyle={styles.flatListContent}
      ListEmptyComponent={
        <View style={styles.emptyComponent}>
          <Text style={styles.emptyText} >No Moveis Found</Text>
        </View>
      }
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    paddingTop: 20,         
  },

  flatListContent: {
    marginTop: 40,   
  },

  emptyComponent: {
    flex: 1,
    marginVertical:300,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 20,   
  },

  emptyText: {
    fontSize: FONT_SIZES.BODY_TEXT,
    textAlign: "center",
    color: COLORS.TEXT_PRIMARY,
    fontWeight: "500", 
  },
  
})

export default Favoritescreen