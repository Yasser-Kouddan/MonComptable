import { useState, useEffect, useContext } from 'react'
import { auth, db } from '../../firebase/FirebaseConfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { getUserInfoAlpha } from '../../firebase/FirebaseMethods'
import { useNavigation } from '@react-navigation/native';
import { profilStyles } from './styles';
import LoadingComponent from '../../components/Loader'
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import avatar from '../../assets/img/avatar.jpg'
import { FontAwesome5 } from '@expo/vector-icons';


export default function ProfileScreen(){

  const navigation = useNavigation();
   
  const [userInfo, setUserInfo] = useState(null);
  const [subState, SetSubState] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUserInfoAlpha(user, db).then((data) => {
          console.log("Got user info:", data);
          setUserInfo(data);
        });

        if(userInfo?.userSubscription === false){
              SetSubState("Free");
          }else{
              SetSubState("Premium");
        }
      } else {
         console.log("This user is not logged !")
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('auth')
      })
      .catch((error) => {
        // An error happened.
      });
  }

    return(
        <View style={profilStyles.container}>
            <View style={profilStyles.card}>
              <View style={profilStyles.avatar_bg}>
                <TouchableOpacity style={profilStyles.signout} onPress={() => handleSignOut()}>
                    <FontAwesome5 name="sign-out-alt" size={24} color="#f04934" />
                </TouchableOpacity>
              </View>
              <View style={profilStyles.avatar_cadre}>
                <Image source={avatar} style={profilStyles.avatar}/>
              </View>
              <Text style={profilStyles.title}>{userInfo?.userName}Kouddan Yasser</Text>
              <View style={profilStyles.infoCard}> 
              <ScrollView>
                  <InfoCard title="Email" subtitle={userInfo?.userEmail}/>
                  <InfoCard title="Numéro de télèphone" subtitle={userInfo?.userPhone}/>
                  <InfoCard title="Type du compte" subtitle={subState}/>
                  <SubscribeButtonAlpha subState={userInfo?.userSubscription}/>
              </ScrollView>
              </View>
            </View>
        </View>
    )
}

const SubscribeButtonAlpha = (props) => {

  if(props.subState === null) return <LoadingScreen />
  if(props.subState === true) return <AlreadyPremiumButton/>
  if(props.subState === false) return <GetPremiumButton/>
  
};

const AlreadyPremiumButton = () => {
  return (
    <View style={[profilStyles.premiumButton, { backgroundColor: "green" }]}>
      <Text style={profilStyles.premiumTitle}>Vous êtes premium</Text>
    </View>
  );
}

const GetPremiumButton = () => {
  return (
    <View style={[profilStyles.premiumButton, { backgroundColor: "#FFC200" }]}>
      <Text style={profilStyles.premiumTitle}>Passer à Premium</Text>
    </View>
  );
}


const InfoCard = (props) => {
  return(
    <>
      <Text style={profilStyles.infoCardTitle}>{props.title}</Text>
      <Text style={profilStyles.infoCardSubtitle} numberOfLines={1}>{props.subtitle}</Text>
    </>
  );
}