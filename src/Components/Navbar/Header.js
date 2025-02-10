import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from 'react-native-vector-icons/FontAwesome'
import ProfileIcon  from 'react-native-vector-icons/Feather'
import COLORS from '../../constants/colors'


const Header = (props) => {
    console.log(props)
  return (
    <View style={styles.container}>
    <View style={styles.profile}>
        <ProfileIcon name='user' color={COLORS.PRIMARY} size={30}/>
        <Text style={styles.profileTitle}>Hello</Text>
    </View>
    <View style={styles.search}>
    <Search name='search' color={COLORS.PRIMARY} size={30}/>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: 'transparent'
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
    },
    profileTitle:{
        paddingHorizontal:10,
        fontWeight:'bold',
        fontSize:25
    },
    search:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
    },

})

export default Header