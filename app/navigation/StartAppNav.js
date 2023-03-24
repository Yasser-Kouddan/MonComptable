import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator()

import Intro from '../screens/intro/Swiper'
import NavBar from './NavBar'
import AuthScreen from '../screens/intro/AuthScreen'
import SignupScreen from '../screens/intro/Signup'
import ProfileScreen from '../screens/home/ProfileScreen'


export default function StartApp(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='intro' component={Intro}/>
                <Stack.Screen name='auth' component={AuthScreen}/>
                <Stack.Screen name='signup' component={SignupScreen}/>
                <Stack.Screen name='myApp' component={NavBar}/>
                <Stack.Screen name='profile' component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


