import { useState, useEffect } from 'react';
import { stockScreen, background, ruptureStock } from './styles'
import { getProductCollection } from '../../firebase/FirebaseMethods';
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

export default function Stock() {
  return (
    <View style={background.bg}>
      <Text style={stockScreen.title}>Inventaire</Text> 
      <Categories/>  
      <RuptureStock/>
    </View>
  );
}

//import image
import lait from '../../assets/img/categorie/produits_laitier.png'
import huile from '../../assets/img/categorie/huile.png'
import epicerie from '../../assets/img/categorie/epicerie.png'
import farine from '../../assets/img/categorie/farine.png'
import nettoyage from '../../assets/img/categorie/nettoyage.png'
import petit_dej from '../../assets/img/categorie/petit_dej.png'
import other from '../../assets/img/categorie/other.png'

function Categories(){
  const Card = (props) => {
    return(
      <TouchableOpacity style={stockScreen.cardCategorie}>
        <Image source={props.img} style={stockScreen.cardIcon}/>
        <Text style={stockScreen.labelCategorie}>{props.label}</Text>
      </TouchableOpacity>
    );
  }
  return(
    <View style={stockScreen.section}>
      <Text style={stockScreen.sectionTitle}>Catologue</Text>
      <View style={{marginHorizontal: 28}}><ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}> 
        <Card img={lait} label="Produits laitiers, jus et oeufs" />
        <Card img={nettoyage} label="Produits de nettoyage et hygiène" />
        <Card img={huile} label="Huile et vinaigres" />
        <Card img={petit_dej} label="Petit déjeuner" />
        <Card img={epicerie} label="Epicerie" />
        <Card img={farine} label="Farine" />
        <Card img={other} label="Autre" />
      </ScrollView></View>
    </View>
  );
}



function RuptureStock(){

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
        ProductCards.push(
              <ProductCard 
                    key={key} 
                    categorie={categorie} 
                    productName={value.prodLabel} 
                    shortage={shortage}
                />)
    })

  return(
      <View style={stockScreen.section}>
          <Text style={stockScreen.sectionTitle}>Rupture de stock</Text>
          <View style={stockScreen.showcase}>
              <ScrollView showsVerticalScrollIndicator={false}>
                    {ProductCards.map((component) => component)}
              </ScrollView>       
          </View>
      </View>
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
    <View style={ruptureStock.productCard}>
      <Image source={imageSource} style={ruptureStock.logo}/>
      <Text style={ruptureStock.productName}>{props.productName}</Text>
      <Text style={ruptureStock.shortage}>{props.shortage}</Text>
    </View>
  );
}
