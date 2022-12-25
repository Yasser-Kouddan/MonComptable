import { Text, View, TouchableOpacity } from 'react-native'


export default function AddScreen({navigation}) {
  return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate("addProduct")}>
              <Text style={styles.label}>Ajouter un produit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate("addContact")}>
              <Text style={styles.label}>Ajouter un fournisseur</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate("addBill")}>
              <Text style={styles.label}>Ajouter une facture</Text>
            </TouchableOpacity>   
        </View>
    
  );
}

