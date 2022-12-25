import { auth } from "./FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native'

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


export { handleSignIn, handleSignUp }