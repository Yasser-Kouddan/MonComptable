import { createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()


// this navigator will 

import AddScreen from '../screens/addActions/AddScreen'
import AddProduct from '../screens/addActions/AddProduct'
import AddContact from '../screens/addActions/AddContact'
import AddBill from '../screens/addActions/AddBill'

function AddStack(){
    return(
        <Stack.Navigator initialRouteName='addScreen'>
            <Stack.Screen name='addScreen' component={AddScreen} options={{headerShown: false}}/>
            <Stack.Screen name='addProduct' component={AddProduct}/>
            <Stack.Screen name='addContact' component={AddContact}/>
            <Stack.Screen name='addBill' component={AddBill}/>
        </Stack.Navigator>
    );
}


import HomeScreen from '../screens/home/HomeScreen'
import ProfileScreen from '../screens/home/ProfileScreen'
import Settings from '../screens/home/Settings'

function HomeStack(){
    return(
        <Stack.Navigator initialRouteName='homeScreen'>
            <Stack.Screen name='homeScreen' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='settings' component={Settings} />
            <Stack.Screen name='profile' component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export { HomeStack, AddStack}