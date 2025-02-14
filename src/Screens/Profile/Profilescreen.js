import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogOutIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import WatchIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FONT_SIZES from '../../constants/text';
import { useSelector } from 'react-redux';


const Profilescreen = ({navigation}) => {
  const logedInUser = useSelector(state => state.auth.logedinUser)
  console.log(logedInUser)


  return (
    <View style={styles.container}>
         <View style={styles.headercontainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Ionicons name="chevron-back" size={40} color={COLORS.PRIMARY} />
            </TouchableOpacity>
            <Text style={styles.pageTitle}>Profile</Text>
            </View>

            <View style={styles.profileCard}>
              <Text>Profile Details</Text>
              <Image source={require('../../assets/images/profile.png')} resizeMode='contain' style={styles.image}/>
              <Text style={styles.texts}>{logedInUser?.name}</Text>
              <Text style={styles.texts}>{logedInUser?.number}</Text>
            </View>  
            <View style={styles.buttons}>
              <LogOutIcon name='logout' style={styles.icons} size={35} onPress={()=>console.log('logout')}/>
              <DeleteIcon name='delete-outline' style={styles.icons} size={35}/>
              <WatchIcon name='bookmark-outline' style={styles.icons} size={35}/>
            </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
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
  pageTitle:{
    fontSize:FONT_SIZES.APP_TITLE,
    color:COLORS.TEXT_PRIMARY,
    fontWeight:'bold',
    marginHorizontal:1,
    alignSelf:'auto',
  },
  profileCard:{
    padding:10,
    marginVertical:20,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:COLORS.CARD_BG,
    borderRadius:30
  },
  image:{
    height:200,
    width:200,
    marginBottom:10,
  },
  texts:{
    fontSize:FONT_SIZES.SUBTITLE,
    color:COLORS.TEXT_PRIMARY,
    fontWeight:'bold',
  },
  buttons:{
    padding:20,
    backgroundColor:COLORS.CARD_BG,
    borderRadius:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',

    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,

    elevation: 10,
  },
  icons:{
    color: COLORS.BUTTON_PRIMARY ,
    shadowColor: "#3bf0e1",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 5,
  }
})

export default Profilescreen