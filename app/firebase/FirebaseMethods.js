import { auth, db } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, collection, addDoc, setDoc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth';
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

const createUsersCollectionGamma = async (user) => {
  try {
    // create user data fields
    const userRef = doc(db, "UsersDB", user.uid);
    const userInfoTemplate = { 
          userName: "",
          userEmail: user.email,
          userPhone: "",
          userSubscription: false,
          expenses: 0,
          incomes: 0,
      }
    await setDoc(userRef, userInfoTemplate);

    // create contact collections
    const contactsRef = collection(userRef, "Contacts")
    await addDoc(contactsRef,{
          contactName: 'Mon numéro',
          contactCompany: 'string',
          contactEmail: 'string',
          contactPhone: '0682432907',
          contactCity: 'string',
          contactCategorie: 'string'
    });

    // create products collections
    const productsRef = collection(userRef, "Products")
    await addDoc(productsRef,{
          prodLabel: 'first product',
          prodBrand: 'string',
          prodCategorie: 'string',
          prodSellPrice: 0,
          prodBuyPrice: 0,
          prodQuantity: 0,
          prodCriticalQuantity: 0
    });


  } catch (error) {
    console.error('Error creating Users collection: ', error);
  }
}

const getUserInfoAlpha = async (currentUser, database) => {
  const userData = {}
  const userRef = doc(database, "UsersDB", currentUser.uid)
  const userDoc = await getDoc(userRef)

  if (userDoc.exists()) {
    console.log("User data:", userDoc.data());
    userData.expenses = userDoc.data().expenses;
    userData.incomes = userDoc.data().incomes;
    userData.userEmail = userDoc.data().userEmail;
    userData.userName = userDoc.data().userName;
    userData.userPhone = userDoc.data().userPhone;
    userData.userSubscription = userDoc.data().userSubscription;
    console.log("Returning user data:", userData);
    return userData;
  } else {
    console.log("No such document!");
  }
};

const getContactCollection = async () => {
    const currentUser = auth.currentUser;
    const contactArray = new Map();
    const userRef = doc(db, "UsersDB", currentUser.uid);
    const contactsRef = collection(userRef, "Contacts");
    const prodDocs = await getDocs(contactsRef);
        prodDocs.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          contactArray.set(doc.id, doc.data())
        });
    return contactArray
};

const getProductCollection = async () => {
  const currentUser = auth.currentUser;
  const productArray = new Map();
  const userRef = doc(db, "UsersDB", currentUser.uid);
  const productsRef = collection(userRef, "Products");
  const prodDocs = await getDocs(productsRef);
      prodDocs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        productArray.set(doc.id, doc.data())
      });
  return productArray;
};


export { handleSignIn, handleSignUp, createUsersCollectionGamma, getUserInfoAlpha, getContactCollection, getProductCollection }
