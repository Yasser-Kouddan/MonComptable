import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { mainStyles } from './styles';
import { doc, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/FirebaseConfig'

const addBill = async (bill) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "UsersDB", user.uid);
      const billsRef = collection(userRef, "Products");
      await addDoc(billsRef, {
        prodBrand: bill.prodBrand,
        prodBuyPrice: bill.prodBuyPrice,
        prodCategorie: bill.prodCategorie,
        prodCriticalQuantity: bill.prodCriticalQuantity,
        prodLabel: bill.prodLabel,
        prodQuantity: bill.prodQuantity,
        prodSellPrice: bill.prodSellPrice,
      });
      console.log("Product added successfully");
    } else {
      console.log("User not logged in");
    }
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

const useProductForm = () => {
  const [formValues, setFormValues] = useState({
    label: '',
    buyPrice: '',
    sellPrice: '',
    brand: '',
    quantity: '',
    criticalQuantity: '',
  });

  const [open, setOpen] = useState(false);
  const [categorieValue, setCategorieValue] = useState("");
  const [items, setItems] = useState([
    {label: 'Produits laitiers, jus et oeufs', value: 'milk'},
    {label: 'Produits de nettoyage et hygiène', value: 'cleaning'},
    {label: 'Huile et vinaigres', value: 'oil'},
    {label: 'Petit déjeuner', value: 'breakfast'},
    {label: 'Epicerie', value: 'epicerie'},
    {label: 'Farine', value: 'farine'},
    {label: 'Autre', value: 'autre'}
  ]);

  const updateFormValues = (key, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [key]: value
    }));
  };

  const handleSubmit = () => {
    const bill = {
      prodBrand: formValues.brand,
      prodBuyPrice: formValues.buyPrice,
      prodCategorie: categorieValue,
      prodCriticalQuantity: formValues.criticalQuantity,
      prodLabel: formValues.label,
      prodQuantity: formValues.quantity,
      prodSellPrice: formValues.sellPrice,
    };
    addProduct(bill);
  };

  return { formValues, updateFormValues, open, setOpen, categorieValue, setCategorieValue, items, setItems, handleSubmit };
};

export default function AddBill({navigation}){
  
    const { formValues, updateFormValues, open,
                setOpen, catogorieValue, setCategorieValue, items, setItems, handleSubmit } = useProductForm();


                return(
                  <View style={mainStyles.container}>
                      <View style={mainStyles.card}>
                          <Text style={mainStyles.title}>Ajouter un produit</Text>
                          <View style={mainStyles.entryView}>
                              <ScrollView showsVerticalScrollIndicator={false}>
                                  <TextInput
                                      placeholder="étiquette"
                                      onChangeText={(text) => updateFormValues("label",text)}
                                      style={mainStyles.textInput}
                                      />
                                  <TextInput
                                      placeholder="marque"
                                      onChangeText={(text) => updateFormValues("brand",text)}
                                      style={mainStyles.textInput}
                                      />
                                  <DropDownPicker
                                      open={open}
                                      value={catogorieValue}
                                      items={items}
                                      setOpen={setOpen}
                                      setValue={setCategorieValue}
                                      setItems={setItems}
                                      listMode={"SCROLLVIEW"}
                                      style={mainStyles.textInput}
                                      />
                                  <TextInput
                                      placeholder="prix de vente"
                                      onChangeText={(text) => updateFormValues("sellPrice",text)}
                                      style={mainStyles.textInput}
                                      keyboardType="numeric"
                                      />
                                  <TextInput
                                      placeholder="prix d'achat"
                                      onChangeText={(text) => updateFormValues("buyPrice",text)}
                                      style={mainStyles.textInput}
                                      keyboardType="numeric"
                                      />
                                  <TextInput
                                      placeholder="quantité"
                                      onChangeText={(text) => updateFormValues("quantity",text)}
                                      style={mainStyles.textInput}
                                      keyboardType="numeric"
                                      />
                                  <TextInput
                                      placeholder="quantité critique"
                                      onChangeText={(text) => updateFormValues("criticalQuantity",text)}
                                      style={mainStyles.textInput}
                                      keyboardType="numeric"
                                      />
                                  <TouchableOpacity 
                                        style={mainStyles.addButton} 
                                        onPress={ () => { handleSubmit();  navigation.navigate("addScreen");
                                    }}>
                                      <Text style={mainStyles.titleButton}>Ajouter</Text>
                                  </TouchableOpacity>
                              </ScrollView>
                          </View>
                          
                      </View>
                  </View>
              );
      }