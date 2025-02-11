import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Search from 'react-native-vector-icons/FontAwesome'
import ProfileIcon  from 'react-native-vector-icons/Feather'
import COLORS from '../../constants/colors'

import { useNavigation } from '@react-navigation/native'


const Header = () => {
    const navigation = useNavigation()

    return (
    <View style={styles.container}>
    <View style={styles.profile}>
        <ProfileIcon name='user' color={COLORS.PRIMARY} size={40}/>
        <Text style={styles.profileTitle}>Hello</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('Searchscreen')}>
        <View style={styles.search}>
            <Search name='search' color={COLORS.PRIMARY} size={40}/>
        </View>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:30,
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
        fontSize:30,
        color:COLORS.TEXT_PRIMARY,
    },
    search:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
    },

})

export default Header