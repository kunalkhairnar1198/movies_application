import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  VirtualizedList,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import useDebounce from '../../hooks/useDebounce';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/colors';
import Searchlist from '../../Components/Searchlist/Searchlist';

const Searchscreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState('');
  const [result, setIsResult] = useState([]);

  const [debounceQuery, cancelDebounce] = useDebounce(searchData, 500);

  const fetchResult = async searchData => {
    if (searchData) {
      const Response = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=ee685f440549ded82e3e87a8eed2f321&query=${searchData}`,
      );
      console.log('-----', Response.data);
      setIsResult(Response.data.results);
    }
  };

  useEffect(() => {
    fetchResult(debounceQuery);
    setIsResult([]);
    setFilterSuggestion([]);
    return () => {
      cancelDebounce();
    };
  }, [debounceQuery]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={styles.headercontainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Ionicons name="chevron-back" size={40} color={COLORS.PRIMARY} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Icon
                name="search"
                style={styles.searchIcon}
                size={25}
                color={COLORS.PRIMARY}
              />
              <TextInput
                style={[styles.textInput, styles.shadowprop]}
                placeholder="Search Movies..."
                placeholderTextColor="#a9a9a9"
                value={searchData}
                onChangeText={text => setSearchData(text)}
              />
            </View>
          </View>
          <View>
            <VirtualizedList
              data={result || []}
              renderItem={({item}) => <Searchlist item={item} />}
              keyExtractor={(item, index) =>
                item?.id ? item?.id?.toString() : index.toString()
              }
              getItemCount={data => data.length}
              getItem={(data, index) => data[index] || null}
              contentContainerStyle={{marginVertical: 10}}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>Search the Movies....</Text>
                </View>
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 30,
    backgroundColor: COLORS.SECONDARY,
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 19,
    color: COLORS.TEXT_PRIMARY,
  },
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
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  emptyContainer: {
    marginVertical: 400,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    color: COLORS.TEXT_PRIMARY,
    textAlign: 'center',
  },
});

export default Searchscreen;
