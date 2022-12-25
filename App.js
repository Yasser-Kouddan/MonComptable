import { SafeAreaView, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import StartApp from './app/navigation/StartAppNav';
import AddProduct from './app/screens/addActions/AddProduct';
import AuthScreen from './app/screens/intro/AuthScreen';
import NavBar from './app/navigation/NavBar';


export default function App() {
  return ( 
      // the real app <StartApp/> 
      // testing plus button
       <NavigationContainer><NavBar/></NavigationContainer> 
  );
}


