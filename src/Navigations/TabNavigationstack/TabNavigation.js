import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {StatusBar} from 'react-native';


import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconpro from 'react-native-vector-icons/Feather';

import Header from '../../Components/Navbar/Header';
import Favoritescreen from '../../Screens/Favorite/Favoritescreen';
import Homescreen from '../../Screens/Home/Homescreen';
import Profilescreen from '../../Screens/Profile/Profilescreen';
import Searchscreen from '../../Screens/Search/Searchscreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = ({navigation}) => {
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

        <Tab.Navigator  screenOptions={screenOptions}>
          <Tab.Screen
            name="Homestack"
            component={HomestackNav}
            options={{
              title: 'Home',
              headerShown:false,
              animation: 'fade',
              tabBarStyle: {
                height: 60 + insets.bottom,
                backgroundColor:COLORS.SECONDARY,
              },
              tabBarIcon: ({ color}) => (
                <Icon name="home" size={30} color={color} />
              ),  
            }}
          />
           <Tab.Screen
            name="Favorite"
            component={Favoritescreen}
            options={{
              title: 'Favorite',
              animation: 'fade',
              tabBarStyle: {
                height: 60 + insets.bottom,
                backgroundColor:COLORS.SECONDARY,
              },
              tabBarIcon: ({ color}) => (
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
              tabBarIcon: ({ color}) => (
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


const HomestackNav =()=>{
  return(
    <Stack.Navigator initialRouteName='Homescreen'>
      <Stack.Screen name='Homescreen' 
      component={Homescreen} 
      options={{
        animation: 'fade',
        headerTransparent:true,
        header:({options})=>(
          <Header {...options} />
        )
        }} />
      <Stack.Screen name='Searchscreen' component={Searchscreen} options={{headerTransparent:'true' , headerShown:false}} />
    </Stack.Navigator>
  )
}


export default TabNavigation;
