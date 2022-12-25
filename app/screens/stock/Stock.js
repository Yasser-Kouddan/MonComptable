import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { stockScreen, background, ruptureStock } from './styles'


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
import farine from '../../assets/img/categorie/farine.png'

function Categories(){
  const Card = (props) => {
    return(
      <View style={stockScreen.cardCategorie}>
        <Image source={props.img} style={stockScreen.cardIcon}/>
        <Text style={stockScreen.labelCategorie}>{props.label}</Text>
      </View>
    );
  }
  return(
    <View style={stockScreen.section}>
      <Text style={stockScreen.sectionTitle}>Catologue</Text>
      <View style={{marginHorizontal: 28}}><ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
        <Card img={lait} label="Produits laitiers, jus et oeufs" />
        <Card img={huile} label="Petit déjeuner" />
        <Card img={farine} label="farine" />
        <Card img={farine} label="HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH" />
      </ScrollView></View>
    </View>
  );
}


function RuptureStock(){

  const ProductCard = (props) => {
      return(
          <View style={ruptureStock.productCard}>
              <Image source={props.categorie} style={ruptureStock.logo}/>
              <Text style={ruptureStock.productName}>{props.productName}</Text>
              {/*<Feather name="trending-down" size={25} color="red" />*/}
              <Text style={ruptureStock.shortage}>{props.shortage}</Text>
          </View>
      );
  }

  return(
      <View style={stockScreen.section}>
          <Text style={stockScreen.sectionTitle}>Rupture de stock</Text>
          <View style={stockScreen.showcase}>
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
                      categorie={lait}
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
                      categorie={lait}
                      productName={"Huile d'olive 1L - Horra"}
                      shortage={24}
                      />

              </ScrollView>       
          </View>
      </View>
  );
}
