import { createStackNavigator } from '@react-navigation/stack'
import Signin from '../../Screens/Auth/Signin'
import Singup from '../../Screens/Auth/Singup'


const Stack = createStackNavigator()

const Authstack = () => {
    // console.log('stacl')
    return (
        <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown:false}}>
            <Stack.Screen name='SignIn' component={Signin}/>
            <Stack.Screen name='SignUp' component={Singup}/>
        </Stack.Navigator>
  )
}

export default Authstack