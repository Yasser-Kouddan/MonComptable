import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { background, homeScreen } from './styles';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avatar.jpg'
import { doc, setDoc } from "firebase/firestore";
import {db} from '../../firebase/FirebaseConfig';
import { getProductCollection } from '../../firebase/FirebaseMethods';
import GrocerySearch from '../../components/GrocerySearch';


export default function HomeScreen({navigation}){

    const [productArray, setProductArray] = useState(new Map());

    useEffect(() => {
        async function fetchData() {
            const data = await getProductCollection();
            setProductArray(data);
        }
        fetchData();
    }, []);

    const ProductCards = []

    productArray.forEach( (value, key) => {
        let shortage = value.prodQuantity - value.prodCriticalQuantity
        let categorie
        switch(value.prodCategorie){
            case "milk"     : categorie =  "produits_laitier";   break;
            case "cleaning" : categorie =  "nettoyage";   break;
            case "oil"      : categorie =  "huile";   break;
            case "breakfast": categorie =  "petit_dej";   break;
            case "epicerie" : categorie =  "epicerie";   break;
            case "farine"   : categorie =  "farine";   break;
            case "autre"    : categorie =  "others";   break;
            default         : categorie =  "others";   break;
        }

        console.log(categorie)
        ProductCards.push(<ProductCard key={key} categorie={categorie} productName={value.prodLabel} shortage={shortage}/>)
    })

    return(
        <KeyboardAvoidingView style={background.bg} behavior="padding">
            <Header />
            <DisplayStock/>
            <RuptureStock data={ProductCards}/>
        </KeyboardAvoidingView>
    );
}



function Header(){
        const navigation = useNavigation()
    return(
        <KeyboardAvoidingView style={homeScreen.header}>
            <TouchableOpacity onPress={() => navigation.navigate("settings")}>
                <Ionicons name="settings" size={35} color="black" />
            </TouchableOpacity>
            <Image source={logo} style={{width: 45, height:45}}/>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Image source={avatar} style={homeScreen.avatar}/>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}


function DisplayStock(){

    const groceryData = [
        {
          id: 1,
          name: 'Bananas',
          description: 'A bunch of ripe bananas',
          price: '$1.50'
        },
        {
          id: 2,
          name: 'Milk',
          description: 'A gallon of whole milk',
          price: '$3.99'
        },
        {
          id: 3,
          name: 'Bread',
          description: 'A loaf of sliced whole wheat bread',
          price: '$2.49'
        },
        // more grocery items ...
      ];

      

    return(
        <KeyboardAvoidingView style={homeScreen.section}>
            <Text style={homeScreen.title}>Chercher un produit</Text>
            <KeyboardAvoidingView style={homeScreen.showcaseAnalytics}>  
                <GrocerySearch groceryData={groceryData} />  
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    );
}


function RuptureStock(props){

    return(
        <KeyboardAvoidingView style={homeScreen.section}>
            <Text style={homeScreen.title}>Rupture de stock</Text>
            <KeyboardAvoidingView style={homeScreen.showcaseShortage}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {props.data.map((component) => component)}
                </ScrollView>       
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    );
}

const ProductCard = (props) => {

    const categoryImages = {
        produits_laitier: require("../../assets/img/categorie/produits_laitier.png"),
        nettoyage: require("../../assets/img/categorie/nettoyage.png"),
        huile: require("../../assets/img/categorie/huile.png"),
        petit_dej: require("../../assets/img/categorie/petit_dej.png"),
        epicerie: require("../../assets/img/categorie/epicerie.png"),
        farine: require("../../assets/img/categorie/farine.png"),
        others: require("../../assets/img/categorie/other.png"),
      };
      
    const imageSource = categoryImages[props.categorie];
    
    return(
      <KeyboardAvoidingView style={homeScreen.productCard}>
        <Image source={imageSource} style={homeScreen.logo}/>
        <Text style={homeScreen.productName}>{props.productName}</Text>
        <Text style={homeScreen.shortage}>{props.shortage}</Text>
      </KeyboardAvoidingView>
    );
  }
  