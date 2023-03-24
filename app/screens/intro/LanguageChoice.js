import { Image, View , Text, TouchableOpacity } from 'react-native';
import logo from "../../assets/img/logo.png"
import maroc from "../../assets/img/maroc.png"
import france from "../../assets/img/france.png"
import CustomButton from '../../components/CustomButton';
import { languageChoice , background } from '../Intro/styles';

export default function LanguageChoice() {
    return (
      <View style={background.bg}>
        <Image source={logo} style={languageChoice.logo}/>
        <View style={languageChoice.languageContainer}>
          <LanguageButton
              countryFlag={france}
              language={"Francais"} />
          <LanguageButton
              countryFlag={maroc}
              language={"Arabe"}/>
          <CustomButton 
            title={"Next"}
            titleColor={"white"}
            bgColor={"#A4BD01"}
            position={languageChoice.next}
            />
        </View>
        
      </View>
    );
  }


  function LanguageButton(props){
      return(
        <View style={languageChoice.buttonContainer}>
          <Image source={props.countryFlag} style={languageChoice.country}/>
            <TouchableOpacity style={languageChoice.languageButton}>
               <Text style={languageChoice.title}>{props.language}</Text>
            </TouchableOpacity>
        </View>
        
    );

  }



  /* this style needs to be implemented in a separate file

  import { StyleSheet } from "react-native";

const background = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
})

const splashScreen = StyleSheet.create({
    logo: {
        width: 200,
         height: 200
    }
  });

const languageChoice = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        marginTop: 120,
        alignSelf: 'center'
    },
    country: {
        width: 90,
        height: 55,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 35,
    },
    languageButton: {
      backgroundColor: "#427AA1",
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      width: 120,
      height: 55,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
    },
    title:{
      fontFamily: 'Lato',
      fontWeight: '400',
      lineHeight: 29,
      color: "white",
      fontSize: 24,
    },
    languageContainer: {
       marginVertical: 150,
       alignSelf: 'center'
    }, 
    next: {
      alignSelf: 'center',
    }

  })

const tutorial = StyleSheet.create({
  text: {
    fontFamily: 'Lato',
    lineHeight: 40,
    fontSize: 40,
    fontWeight: '600',
    letterSpacing: 3,
    color: '#427AA2',
    textAlign: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 500,
  },
  banner: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    position: 'absolute',
    top: 190,
   },
   cloud: {
     width: 400,
     height: 300,
     alignSelf: 'center',
     position: 'absolute',
     top: 100,
     opacity: 0.2
   }
})

const signIn = StyleSheet.create({})



  export {splashScreen, languageChoice, background, tutorial, signIn};


  */