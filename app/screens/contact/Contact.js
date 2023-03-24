import { useState, useEffect } from 'react';
import { getContactCollection } from '../../firebase/FirebaseMethods';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Linking } from 'react-native'
import { background, contactScreen, searchBar, contactCard } from './styles'


export default function Contact(){

    const [contactArray, setContactArray] = useState(new Map());

    useEffect(() => {
        async function fetchData() {
            const data = await getContactCollection();
            setContactArray(data);
        }
        fetchData();
    }, []);

    const ContactCards = []

    contactArray.forEach( (value, key) => {
        let categorie
        switch(value.contactCategorie){
            case "milk"     : categorie =  "produits_laitier";   break;
            case "cleaning" : categorie =  "nettoyage";   break;
            case "oil"      : categorie =  "huile";   break;
            case "breakfast": categorie =  "petit_dej";   break;
            case "epicerie" : categorie =  "epicerie";   break;
            case "farine"   : categorie =  "farine";   break;
            case "autre"    : categorie =  "others";   break;
            default         : categorie =  "others";   break;
        }

    ContactCards.push(
            <ContactCard 
                key={key}
                name={value.contactName}
                phone={value.contactPhone}
                categorie={categorie}
                />
        )
    })

    return(
        <SafeAreaView style={background.bg}>
            <Text style={contactScreen.title}>Fournisseurs</Text>
            <SearchBar/>
            <View style={contactScreen.contactCarousel}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {ContactCards.map((component) => component)}
                </ScrollView>
            </View>  
        </SafeAreaView>
    );
}


function SearchBar(){
    return(
        <View style={searchBar.container}>
            <TextInput 
                style={searchBar.searchInput}
                placeholder=" 🔎  Search here . . ." 
            />
            <FontAwesome name="filter" size={34} color="#808080" />
        </View>
    );
}


function ContactCard(props){

    let firstLetter = props.name.charAt(0)

    const handleCallPress = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
      };
    return(
        <View style={contactCard.container}>
            <View style={contactCard.nameContainer}>
                <View style={contactCard.iconContainer}>
                    <Text style={contactCard.iconText}>{firstLetter}</Text>
                </View>
                <View style={contactCard.titleContainer}>
                    <Text style={contactCard.title}>{props.name}</Text>
                    <Text style={contactCard.subtitle}>{props.categorie}</Text>
                </View>
            </View>
            <View style={contactCard.buttonContainer}>
                <TouchableOpacity style={contactCard.callButton} onPress={()=>handleCallPress(props.phone)}>
                    <FontAwesome name="phone" size={20} color="black" /> 
                </TouchableOpacity>
                <TouchableOpacity style={contactCard.infoButton} >
                    <FontAwesome name="info" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

