import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import { caisseScreen, background } from './styles'
import { Ionicons } from '@expo/vector-icons';


//import image
import lait from '../../assets/img/categorie/produits_laitier.png'
import huile from '../../assets/img/categorie/huile.png'
import farine from '../../assets/img/categorie/farine.png'


export default function Caisse() {
  return (
    <View style={background.bg}>
      <Text style={caisseScreen.title}>Comptabilité</Text>
      <Stonks/>
      <SelledProduct/>
    </View>
  );
}

function Stonks(){
  return(

    <View style={caisseScreen.stonks}>

      <View style={caisseScreen.horizontal}>
        <Ionicons name="md-arrow-up-circle-outline" size={65} color="#38E54D" />
        <View style={caisseScreen.vertical}>
          <Text style={caisseScreen.h1}>Bénefices</Text>
          <Text style={caisseScreen.h2}>45 000 DH</Text>
        </View>
      </View>

      <View style={caisseScreen.hr}></View>

      <View style={caisseScreen.horizontal}>
        <Ionicons name="md-arrow-down-circle-outline" size={65} color="#FF0000" />
        <View style={caisseScreen.vertical}>
          <Text style={caisseScreen.h1}>Charges</Text>
          <Text style={caisseScreen.h2}>27 000 DH</Text>
        </View>
      </View>

    </View>

  );
}

function SelledProduct(){

  const ProductCard = (props) => {
    return(
        <View style={caisseScreen.productCard}>
            <Image source={props.categorie} style={caisseScreen.logo}/>
            <Text style={caisseScreen.productName}>{props.productName}</Text>
            <Text style={caisseScreen.quantity}>{props.quantity}</Text>
            <Text style={caisseScreen.price}>{props.price}</Text>
        </View>
    );
  }

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
            <ProductCard
                categorie={huile}
                productName={"Huile d'olive 1L - Horra"}
                quantity={24}
                price={75}
              />
            <ProductCard
                categorie={huile}
                productName={"Huile d'olive 1L - Horra"}
                quantity={24}
                price={75}
              />
            <ProductCard
                categorie={huile}
                productName={"Huile d'olive 1L - Horra"}
                quantity={24}
                price={75}
              />
            <ProductCard
                categorie={huile}
                productName={"Huile d'olive 1L - Horra"}
                quantity={24}
                price={75}
              />
            <ProductCard
                categorie={huile}
                productName={"Huile d'olive 1L - Horra"}
                quantity={24}
                price={75}
              />
            <ProductCard
                categorie={huile}
                productName={"Huile d'olive 1L - Horra"}
                quantity={24}
                price={75}
              />

            </ScrollView>         
          </View>
      </View>
  );
}
