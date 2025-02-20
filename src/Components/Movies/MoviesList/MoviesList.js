import React from 'react';
import { StyleSheet, Text, View, VirtualizedList} from 'react-native';

import MovieItem from '../Moviesitem/MovieItem';
import COLORS from '../../../constants/colors';
import Loader from '../../Loader/Loader';

const MoviesList = ({item, onLoadMore, isLoading}) => {
  // console.log(item);

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={item}
        initialNumToRender={10}
        keyExtractor={(item, index) =>
          item?.id ? item.id.toString() : index.toString()
        }
        renderItem={({item}) => <MovieItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onEndReached={onLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={item.length > 0 && isLoading ? <Loader /> : null}
        contentContainerStyle={styles.flatListContent}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyComponent}>No Movies Found</Text>
          </View>
        }
        getItem={(data, index) => data[index]} 
        getItemCount={data => data.length} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'flex-start',
    paddingBottom: 15,
  },
  flatListContent: {
    paddingHorizontal: 5,
  },
  emptyComponent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.TEXT_PRIMARY,
  },
});

export default MoviesList;
