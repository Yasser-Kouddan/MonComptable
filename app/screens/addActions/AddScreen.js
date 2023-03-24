import { Text, View, TouchableOpacity } from 'react-native'
import { menuStyles } from './styles';
import { getUserInfo } from '../../firebase/FirebaseMethods';

export default function AddScreen({navigation}) {

  return (
        <View style={menuStyles.container}>
            <TouchableOpacity style={menuStyles.menuCard} onPress={() => navigation.navigate("addProduct")}>
              <Text style={menuStyles.label}>Ajouter un produit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menuStyles.menuCard} onPress={() => navigation.navigate("addContact")}>
              <Text style={menuStyles.label}>Ajouter un fournisseur</Text>
            </TouchableOpacity>
            <TouchableOpacity style={menuStyles.menuCard} onPress={() => navigation.navigate("addBill")}>
              <Text style={menuStyles.label}>Ajouter une facture</Text>
            </TouchableOpacity>   
        </View>
    
  );
}

