import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {getLogoImage, image500} from '../../constants/images';

import FONT_SIZES from '../../constants/text';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../constants/colors';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const Detailsscreen = () => {
  const moviesDetails = useSelector(state => state.movies.detailsMovie);
  const navigation = useNavigation()
  console.log(moviesDetails);


  useEffect(()=>{
    const header = navigation.getParent()?.setOptions({headershown:false})
    if(moviesDetails){
      navigation.setOptions({title:`${moviesDetails?.original_title}`})
    }else{
      <Text>Loading...</Text>
    }
    return(()=>{
      navigation.getParent()?.setOptions({headershown:true})
    })
  },[navigation])
  

  return (
    <ScrollView style={styles.container} edges={['top']}>
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

        <View>
          <Text style={styles.description}>{moviesDetails?.overview}</Text>
        </View>

        <View style={styles.generessection}>
          <Text style={{color: 'white'}}>Geners</Text>
          {moviesDetails?.genres?.map(item => (
            <View key={item?.id}>
              <Text style={styles.list}>{item?.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.countriessection}>
          <Text style={styles.countrititle}>Countries</Text>
          {moviesDetails?.production_countries?.map((item, index) => (
            <View key={index} style={styles.countrieslist}>
              <Text style={styles.list}>{item?.name}</Text>
            </View>
          ))}
        </View>


        <View style={styles.languagesection}>
          <Text style={styles.langtitle}>Language</Text>
          {moviesDetails?.spoken_languages?.map((item, index) => (
            <View key={index} style={styles.langlist}>
              <Text style={{color: 'black'}}>{item?.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonsection}>
          
        </View>


        <View style={styles.productcontainer}>
        <Text style={styles.protitle}>Production</Text>
        <ScrollView
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.productcompsection}>
          {moviesDetails?.production_companies?.map((item, index) => (
            <View key={index} style={styles.prodcircle}>
              {item.logo_path ? (
                <Image
                  source={{uri: getLogoImage(item?.logo_path)}}
                  style={styles.imagescroll}
                />
              ) : (
                ''
              )}
              <Text style={styles.prodname}>{item?.name}</Text>
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
    flexDirection: 'column',
    backgroundColor: COLORS.BACKGROUND,
  },
  image: {
    // position:'absolute',
    // flex:1,
    width: '100%',
    height: 300,
  },
  detailSection: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    padding: 20,
  },
  title: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: FONT_SIZES.SUBTITLE + 11,
    fontWeight: 'semibold',
    marginBottom: 5,
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
    color: COLORS.TEXT_MUTED,
    fontSize: FONT_SIZES.BODY_TEXT,
    justifyContent: 'center',
    textAlign: 'justify',
  },
  generessection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#7b616132',
    borderRadius: 30,
    padding: 5,
  },
  list: {
    color: COLORS.TEXT_MUTED,
  },

  countriessection:{
    marginTop:10,
    flexDirection:'row',
    borderRadius: 30,
    padding: 5,
    gap:5,
  },
  countrititle:{
    fontSize:FONT_SIZES.BODY_TEXT + 2,
    color:COLORS.TEXT_PRIMARY
  },
  countrieslist:{
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    backgroundColor:'#7b616132',
  },

  languagesection:{
    marginTop:10,
    flexDirection:'row',
    borderRadius: 30,
    padding: 5,
    gap:5,
  },
  langtitle:{
    fontSize:FONT_SIZES.BODY_TEXT + 2,
    color:COLORS.TEXT_PRIMARY
  },
  langlist:{
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    backgroundColor:COLORS.PRIMARY,
  },

  productcontainer:{
    marginVertical:20
  },
  protitle:{
    fontSize:FONT_SIZES.BODY_TEXT + 2,
    color:COLORS.TEXT_PRIMARY
  },
  productcompsection: {
    flexDirection: 'row',
  },
  prodcircle: {
    marginVertical: 20,
    alignItems: 'center',
    marginRight: 10,
    backgroundColor:COLORS.PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
  prodname:{
    fontWeight:'semibold',
    fontSize:FONT_SIZES.BUTTON_TEXT,
    color:'black'
  },
  imagescroll: {
    width: 80,
    height: 50,
    resizeMode: 'contain',
  },
  
});

export default Detailsscreen;
