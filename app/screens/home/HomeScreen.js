import { View, Text, Image, ScrollView } from "react-native";
import { background, homeScreen } from './styles';
import { Feather } from '@expo/vector-icons';
import logo from '../../assets/img/logo.png'
import avatar from '../../assets/img/avatar.jpg'

import petit_dej from '../../assets/img/categorie/petit_dej.png'
import farine from '../../assets/img/categorie/farine.png'
import huile from '../../assets/img/categorie/huile.png'
import nettoyage from '../../assets/img/categorie/nettoyage.png'
import produits_laitier from '../../assets/img/categorie/produits_laitier.png'

export default function HomeScreen(){
    return(
        <View style={background.bg}>
            <Header/>
            <Analytics/>
            <RuptureStock/>
        </View>
    );
}


function Header(){
    return(
        <View style={homeScreen.header}>
            <Feather name="menu" size={30} color="black" />
            <Image source={logo} style={{width: 45, height:45}}/>
            <Image source={avatar} style={homeScreen.avatar}/>
        </View>
    );
}


function Analytics(){

    return(
        <View style={homeScreen.section}>
            <Text style={homeScreen.title}>Analytiques</Text>
            <View style={homeScreen.showcaseAnalytics}>         
            </View>
        </View>
    );
}


function RuptureStock(){

    const ProductCard = (props) => {
        return(
            <View style={homeScreen.productCard}>
                <Image source={props.categorie} style={homeScreen.logo}/>
                <Text style={homeScreen.productName}>{props.productName}</Text>
                <Text style={homeScreen.shortage}>{props.shortage}</Text>
            </View>
        );
    }

    return(
        <View style={homeScreen.section}>
            <Text style={homeScreen.title}>Rupture de stock</Text>
            <View style={homeScreen.showcaseShortage}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ProductCard
                        categorie={huile}
                        productName={"Huile d'olive 1L - Horra"}
                        shortage={24}
                        />
                    <ProductCard
                        categorie={farine}
                        productName={"Huile d'olive 1L - Horra"}
                        shortage={24}
                        />
                    <ProductCard
                        categorie={produits_laitier}
                        productName={"Huile d'olive 1L - Horra"}
                        shortage={24}
                        />
                        <ProductCard
                        categorie={huile}
                        productName={"Huile d'olive 1L - Horra"}
                        shortage={24}
                        />
                    <ProductCard
                        categorie={farine}
                        productName={"Huile d'olive 1L - Horra"}
                        shortage={24}
                        />
                    <ProductCard
                        categorie={produits_laitier}
                        productName={"Huile d'olive 1L - Horra"}
                        shortage={24}
                        />

                </ScrollView>       
            </View>
        </View>
    );
}

