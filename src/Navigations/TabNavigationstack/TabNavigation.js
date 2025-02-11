import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar, StyleSheet} from 'react-native';


import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconpro from 'react-native-vector-icons/Feather';

import Header from '../../Components/Navbar/Header';
import Favoritescreen from '../../Screens/Favorite/Favoritescreen';
import Homescreen from '../../Screens/Home/Homescreen';
import Profilescreen from '../../Screens/Profile/Profilescreen';


const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  const screenOptions = {
    tabBarHideOnKeyboard:true,
    tabBarActiveTintColor: COLORS.PRIMARY,
    tabBarInactiveTintColor: '#0f9e9e',
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar animated={true} backgroundColor={COLORS.PRIMARY} />

        <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Tab.Screen
            name="Home"
            component={Homescreen}
            options={{
              title: 'Home',
              animation: 'fade',
              headerTransparent:true,
              tabBarStyle: {
                height: 60 + insets.bottom,
                backgroundColor:COLORS.SECONDARY,
              },
              tabBarIcon: ({focused, color}) => (
                <Icon name="home" size={30} color={color} />
              ),  
              header:({options})=>(
                <Header {...options}/>
              )
            }}
          />
           <Tab.Screen
            name="Favorite"
            component={Favoritescreen}
            options={{
              title: 'Favorite',
              animation: 'fade',
              // headerShown: false,
              tabBarStyle: {
                height: 60 + insets.bottom,
                backgroundColor:COLORS.SECONDARY,
              },
              tabBarIcon: ({focused, color}) => (
                <Iconpro
                  name="heart"
                  size={30}
                  color={color}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={Profilescreen}
            options={{
              title: 'Profile',
              animation: 'fade',
              // headerShown: false,
              tabBarStyle: {
                height: 60 + insets.bottom,
                backgroundColor:COLORS.SECONDARY,
              },
              tabBarIcon: ({focused, color}) => (
                <Iconpro
                  name="user"
                  size={30}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  // tabbarContainer:{
  //     height:10
  // }
});
export default TabNavigation;
