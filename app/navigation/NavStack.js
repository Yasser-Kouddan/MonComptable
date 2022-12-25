import { createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()


// this navigator will 

import AddScreen from '../screens/addActions/AddScreen'
import AddProduct from '../screens/addActions/AddProduct'
import AddContact from '../screens/addActions/AddContact'
import AddBill from '../screens/addActions/AddBill'

export default function AddStack(){
    return(
        <Stack.Navigator initialRouteName='addScreen'>
            <Stack.Screen name='addScreen' component={AddScreen} options={{headerShown: false}}/>
            <Stack.Screen name='addProduct' component={AddProduct}/>
            <Stack.Screen name='addContact' component={AddContact}/>
            <Stack.Screen name='addBill' component={AddBill}/>
        </Stack.Navigator>
    );
}
