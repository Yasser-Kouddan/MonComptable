import { useState, useEffect, useMemo } from 'react';
import { auth, db } from '../../firebase/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserInfoAlpha, getProductCollection } from '../../firebase/FirebaseMethods';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { caisseScreen, background } from './styles'
import { Ionicons } from '@expo/vector-icons';
import LoadingComponent from "../../components/Loader"

export default function Caisse() {
  
  return (
    <View style={background.bg}>
      <Text style={caisseScreen.title}>Comptabilité</Text>
      <Stonks/>
      <SelledProduct/>
    </View>
  );
}


const Stonks = (props) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserInfoAlpha(user, db).then((data) => {
          console.log("Got user info:", data);
          setUserInfo(data);
        });
      } else {
         console.log("This user is not logged !")
      }
    });
  }, []);

  const shouldRender = useMemo(() => userInfo !== null, [userInfo]);

  return shouldRender ? (
    <View style={caisseScreen.stonks}>

      <View style={caisseScreen.horizontal}>
        <Ionicons name="md-arrow-up-circle-outline" size={65} color="#38E54D" />
        <View style={caisseScreen.vertical}>
          <Text style={caisseScreen.h1}>Bénefices</Text>
          <Text style={caisseScreen.h2}>{userInfo?.incomes} DH</Text>
        </View>
      </View>

      <View style={caisseScreen.hr}></View>

      <View style={caisseScreen.horizontal}>
        <Ionicons name="md-arrow-down-circle-outline" size={65} color="#FF0000" />
        <View style={caisseScreen.vertical}>
          <Text style={caisseScreen.h1}>Charges</Text>
          <Text style={caisseScreen.h2}>{userInfo?.expenses} DH</Text>
        </View>
      </View>

    </View>
  ) : <LoadingComponent/>;
}


function SelledProduct(){
 
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
                    quantity={value.prodQuantity}
                    price={value.prodSellPrice}
                  />
        )
  })

  return(
      <View style={caisseScreen.section}>
          <View style={caisseScreen.sectionHeader}>
            <Text style={caisseScreen.sectionTitle}>Produits vendus</Text>
            <TouchableOpacity>
              <Ionicons name="ios-calendar" size={35} color="black" />
            </TouchableOpacity>
          </View>
          <View style={caisseScreen.showcase}>
            <View style={[caisseScreen.horizontal,caisseScreen.showcaseHeader]}>
              <Text style={[caisseScreen.productName,{marginRight: 100}]}>Produits</Text>
              <Text style={[caisseScreen.productName,{marginRight: 20}]}>Quantité</Text>
              <Text style={caisseScreen.productName}>Prix</Text>
            </View>
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
      <View style={caisseScreen.productCard}>
          <Image source={imageSource} style={caisseScreen.logo}/>
          <Text style={caisseScreen.productName}>{props.productName}</Text>
          <Text style={caisseScreen.quantity}>{props.quantity}</Text>
          <Text style={caisseScreen.price}>{props.price}</Text>
      </View>
  );
}


