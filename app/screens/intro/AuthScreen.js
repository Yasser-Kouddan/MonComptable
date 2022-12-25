import { useState } from 'react';
import { Text, TextInput, SafeAreaView, Image, Alert, TouchableOpacity, KeyboardAvoidingView, View } from 'react-native'
import { background, authScreen } from './styles'
import logo from '../../assets/img/logo.png'

// import firebase methods for handling authentification
import { auth } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';



export default function AuthScreen({navigation}){

    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const handleSignIn = (email, password) => {

        if(email != "" || password != ""){ 
         signInWithEmailAndPassword(auth, email, password)
           .then( (userCredential) => { 
               const user = userCredential.user;
               Alert.alert("Login successfully")
               navigation.navigate("myApp")
             })
           .catch( (err) => Alert.alert("Login failed : "+err.message) )
         }else Alert.alert("Please enter your email and password to proceed!")
    }
    
    const handleSignUp = (email, password) => {
        if(email != "" || password != ""){
          createUserWithEmailAndPassword(auth, email, password)
            .then( () => { 
              Alert.alert("Signing up successfully")
              navigation.navigate("myApp")
            })
            .catch( (err) => Alert.alert("Signing up failed : "+err.message) )
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
                    onPress={() => handleSignUp(email, password)}>
                    <Text style={authScreen.buttonTitle}>Inscrivez-vous</Text>
                </TouchableOpacity>
            </View>  
                
        </SafeAreaView>
    );
}


