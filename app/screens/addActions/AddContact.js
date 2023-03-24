import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { mainStyles } from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { doc, collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/FirebaseConfig'

const addContact = async (contact) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "UsersDB", user.uid);
      const contactsRef = collection(userRef, "Contacts");
      await addDoc(contactsRef, {
            contactName: contact.contactName,
            contactCompany: contact.contactCompany,
            contactEmail: contact.contactEmail,
            contactPhone: contact.contactPhone,
            contactCity: contact.contactCity,
            contactCategorie: contact.contactCategorie
        })
      console.log("Contact added successfully");
    } else {
      console.log("User not logged in");
    }
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};

const useContactForm = () => {
  const [formValues, setFormValues] = useState({
        contactName: '',
        contactCompany: '',
        contactEmail: '',
        contactPhone: '',
        contactCity: '',
        contactCategorie: ''
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
    const contact = {
        contactName: formValues.contactName,
        contactCompany: formValues.contactCompany,
        contactEmail: formValues.contactEmail,
        contactPhone: formValues.contactPhone,
        contactCity: formValues.contactCity,
        contactCategorie: formValues.contactCategorie
    };
    addContact(contact);
  };

  return { formValues, updateFormValues, open, setOpen, categorieValue, setCategorieValue, items, setItems, handleSubmit };
};

export default function AddContact({navigation}){

    const { formValues, updateFormValues, open,
        setOpen, catogorieValue, setCategorieValue, items, setItems, handleSubmit } = useContactForm();

    return(
        <View style={mainStyles.container}>
        <View style={mainStyles.card}>
            <Text style={mainStyles.title}>Ajouter un fournisseur</Text>
            <View style={mainStyles.entryView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TextInput
                        placeholder="Nom et prénom"
                        onChangeText={(text) => updateFormValues("contactName",text)}
                        style={mainStyles.textInput}
                        />
                    <TextInput
                        placeholder="E-mail"
                        onChangeText={(text) => updateFormValues("contactEmail",text)}
                        style={mainStyles.textInput}
                        />
                    <TextInput
                        placeholder="Numéro de télèphone"
                        onChangeText={(text) => updateFormValues("contactPhone",text)}
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
                        placeholder="Entreprise"
                        onChangeText={(text) => updateFormValues("contactCompany",text)}
                        style={mainStyles.textInput}
                        />
                    <TextInput
                        placeholder="Ville"
                        onChangeText={(text) => updateFormValues("contactCity",text)}
                        style={mainStyles.textInput}
                        />                  
                    <TouchableOpacity 
                        style={mainStyles.addButton} 
                        onPress={ () => { handleSubmit(); navigation.navigate("addScreen");
                    }}>
                        <Text style={mainStyles.titleButton}>Ajouter</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            
        </View>
    </View>
    );
}




