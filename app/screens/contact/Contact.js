import { View, Text, TextInput, ScrollView, SafeAreaView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { background, contactScreen, searchBar, contactCard } from './styles'


export default function Contact(){
    return(
        <SafeAreaView style={background.bg}>
            <Text style={contactScreen.title}>Fournisseurs</Text>
            <SearchBar/>
            <View style={contactScreen.contactCarousel}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
                    <ContactCard/>
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


function ContactCard(){
    return(
        <View style={contactCard.container}>
            <View style={contactCard.iconContainer}>
                <Text style={contactCard.iconText}>Y</Text>
            </View>
            <View style={contactCard.titleCard}>
                <Text style={contactCard.title}>Yasser</Text>
                <Text style={contactCard.subtitle}>Lait & Yaourt</Text>
            </View>
            <View style={contactCard.callButton}>
                <FontAwesome name="phone" size={20} color="black" /> 
            </View>
            <View style={contactCard.infoButton} >
                <FontAwesome name="info" size={20} color="black" />
            </View>
        </View>
    );
}

