import { useState } from 'react';
import { Text, TextInput, SafeAreaView, Image, Alert, TouchableOpacity, KeyboardAvoidingView, View } from 'react-native'
import { background, authScreen } from './styles'
import logo from '../../assets/img/logo.png'


// import firebase methods for handling authentification
import { auth, db } from "../../firebase/FirebaseConfig";
import { createUsersCollectionGamma } from "../../firebase/FirebaseMethods"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, updateDoc } from "firebase/firestore"; 
 


export default function AuthScreen({navigation}){

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const data = {
        UserInfo: {
          userId: 'random string',
          userName: 'string',
          userEmail: 'string',
          userPhone: 'string',
          userSubscription: false
        },
        UserStore: {
          Products: {
            prodId: 'random string',
            prodLabel: 'string',
            prodBrand: 'string',
            prodCategorie: 'string',
            prodSellPrice: 0,
            prodBuyPrice: 0,
            prodQuantity: 0,
            prodCriticalQuantity: 0
          }
        },
        Accounting: {
          incomes: 0,
          expenses: 0
        },
        Contacts: {
          contactId: 'random string',
          contactName: 'string',
          contactCompany: 'string',
          contactEmail: 'string',
          contactPhone: 'string',
          contactCity: 'string',
          contactCategorie: 'string'
        }
        }

    const handleSignIn = (email, password) => {
        // setPersistance is causing this error
        if(email != "" || password != ""){ 
            const signedIn = signInWithEmailAndPassword(auth, email, password)
              .then( () => {
                  Alert.alert("Login successfully");
                  navigation.navigate("myApp");
                })
              .catch( (err) => Alert.alert("Login failed : "+err.message) )
            return signedIn
      }else Alert.alert("Please enter your email and password to proceed!")
      
    }
    
  
    return(
        <SafeAreaView style={background.bg}>
            <Image source={logo} style={authScreen.logo} />
            <Text style={authScreen.title}>Bienvenue</Text>
            <KeyboardAvoidingView style={authScreen.inputField}>
                <TextInput 
                    placeholder='Entrer votre email' 
                    style={authScreen.textinput}
                    onChangeText={text => SetEmail(text)}
                    />
                <TextInput 
                    placeholder='Entrer votre mot de passe'  
                    style={authScreen.textinput}
                    onChangeText={text => SetPassword(text)}
                    secureTextEntry={true}
                    />
            </KeyboardAvoidingView>
            <View style={authScreen.buttonField}>
                <TouchableOpacity style={authScreen.button} 
                    onPress={() => {handleSignIn(email, password)}
                    }>
                    <Text style={authScreen.buttonTitle}>Connectez-vous</Text>
                </TouchableOpacity>
                <Text style={authScreen.separator}>-----------   OU   -----------</Text>
                <TouchableOpacity style={authScreen.button} 
                    onPress={() => navigation.navigate("signup")}>
                    <Text style={authScreen.buttonTitle}>Inscrivez-vous</Text>
                </TouchableOpacity>
            </View>  
                
        </SafeAreaView>
    );
}


