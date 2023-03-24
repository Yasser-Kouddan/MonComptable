import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, Image, Alert, TouchableOpacity, View, ScrollView } from 'react-native'
import { store } from '../../firebase/FirebaseConfig'
import { background, signupScreen } from './styles'
import logo from '../../assets/img/logo.png'

import ImagePickerComponent from '../../components/ImagePicker';
//import firebase methods for handling authentification
import { auth, db } from "../../firebase/FirebaseConfig";
import { createUsersCollectionGamma } from "../../firebase/FirebaseMethods"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, updateDoc } from "firebase/firestore"; 



export default function SignupScreen(){
    const navigation = useNavigation();
    const [formState, handleChange] = useFormState();

    const handleSignUp = (email, password) => {
            if(email != "" || password != ""){
                    createUserWithEmailAndPassword(auth, email, password)
                        .then( (userCredential) => { 
                            // create a document in the db to receive new user data
                            createUsersCollectionGamma(userCredential.user);  
                            Alert.alert("Signing up successfully")
                            navigation.navigate("auth")
                        })
                        .catch( (err) => {Alert.alert("Signing up failed : "+err.message); console.error(err.message);} )
              }else Alert.alert("Please enter your email and password to proceed!")
    }
  
    return(
        <SafeAreaView style={background.bg}>
            <Image source={logo} style={signupScreen.logo} />
            <Text style={signupScreen.title}>Veuillez saisir vos informations</Text>
                <View style={signupScreen.inputField}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImagePickerComponent style={signupScreen.imgPicker} />
                    <TextInput 
                        placeholder='Entrer votre nom complet' 
                        style={signupScreen.textinput}
                        onChangeText={text => handleChange('name', text)}
                        value={formState.name}
                        />
                    <TextInput 
                        placeholder='Entrer votre email' 
                        style={signupScreen.textinput}
                        onChangeText={text => handleChange('email', text)}
                        value={formState.email}
                        />
                    <TextInput 
                        placeholder='Entrer votre numéro de télèphone' 
                        style={signupScreen.textinput}
                        onChangeText={text => handleChange('phone', text)}
                        value={formState.phone}
                        />
                    <TextInput 
                        placeholder='Entrer votre mot de passe' 
                        style={signupScreen.textinput}
                        onChangeText={text => handleChange('password', text)}
                        value={formState.password}
                        />
                    <TextInput 
                        placeholder='Confirmer votre mot de passe'  
                        style={signupScreen.textinput}
                        onChangeText={text => handleChange('verifyPassword', text)}
                        value={formState.verifyPassword}
                        secureTextEntry={true}
                        />
                </ScrollView>
            </View>
            
            <View style={signupScreen.buttonField}>
                <TouchableOpacity style={signupScreen.button} 
                    onPress={() => { 
                            if(formState.verifyPassword === formState.password){
                                handleSignUp(formState.email, formState.password)
                            }else{ Alert.alert("Mot de passe incorrect !") }
                        }}>
                        <Text style={signupScreen.buttonTitle}>GO!</Text>
                </TouchableOpacity>
            </View>  

        </SafeAreaView>
    );
}

    function useFormState() {
        const [formState, setFormState] = useState({
            name: '',
            email: '',
            password: '',
            verifyPassword: '',
            phone: ''
        });

        const handleChange = (name, value) => {
            setFormState({
            ...formState,
            [name]: value
            });
        };

        return [formState, handleChange];
    }


