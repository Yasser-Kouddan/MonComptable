import { View, Image, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, StatusBar } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import plus from '../assets/img/plus.png' 

// get screen sizes
const H = Dimensions.get("screen").height
const W = Dimensions.get("screen").width


// import screens that use bottom tab navigation
import { HomeStack, AddStack } from './NavStack';
import Contact from '../screens/contact/Contact'
import Caisse from '../screens/caisse/Caisse'
import Stock from '../screens/stock/Stock'


// creation of an instance of bottom tab navigator
const Tab = createBottomTabNavigator()

// screeOptions for each screen
const options = {
    navOptions: { 
        tabBarStyle: { backgroundColor: '#427AA2', height: 80, justifyContent: 'center', marginTop: 20},
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600',marginBottom: 14},
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#A4BD01',
        tabBarInactiveTintColor: '#E2E4E5'
    },
     homeOptions : {
        tabBarIcon: ({ focused }) => <FontAwesome5 name="home" size={22} color={focused ? "#A4BD01" : "#E2E4E5"} />,
        tabBarLabel: "Acceuil",
    },
     contactOptions : {
        tabBarIcon: ({ focused }) => <FontAwesome5 name="handshake" size={22} color={focused ? "#A4BD01" : "#E2E4E5"} />,
        tabBarLabel: "Contact"
    },
    
    addActionOptions : {
        tabBarLabel: '',
        tabBarIcon: () => <AddButton/>,
    },
    caisseOptions : {
        tabBarIcon: ({ focused }) => <FontAwesome5 name="cash-register" size={22} color={focused ? "#A4BD01" : "#E2E4E5"} />,
        tabBarLabel: "Caisse",
    },
    stockOptions : {
        tabBarIcon: ({ focused }) => <FontAwesome5 name="box" size={22} color={focused ? "#A4BD01" : "#E2E4E5"} />,
        tabBarLabel: "Stock",
    }

}

export default function NavBar(){
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#EBF2FA'}}>
                <Tab.Navigator screenOptions={options.navOptions}>
                    <Tab.Screen name='home' component={HomeStack} options={options.homeOptions}/>
                    <Tab.Screen name='contact' component={Contact} options={options.contactOptions}/>
                    <Tab.Screen name='addStack'component={AddStack} options={options.addActionOptions}/>
                    <Tab.Screen name='caisse' component={Caisse} options={options.caisseOptions}/>
                    <Tab.Screen name='stock' component={Stock} options={options.stockOptions}/>
                </Tab.Navigator>
            <StatusBar 
                barStyle="dark-content"
                backgroundColor={'#427AA2'}/>
        </SafeAreaView>
    );
}



function AddButton(){

    const buttonStyle = StyleSheet.create({
        container: {
            width: 80,
            height: 80,
            position: 'absolute',
            bottom: 10,
            backgroundColor: '#EBF2FA',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
        },
        plus: {
            width: 60, 
            height: 60,
        }
    })

    return(   
            <View style={buttonStyle.container}>
                    <Image source={plus} style={buttonStyle.plus}/>
            </View>    
    );
}




