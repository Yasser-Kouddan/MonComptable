import { View, Image, StatusBar } from 'react-native'
import { intro } from './styles'
import Onboarding from 'react-native-onboarding-swiper'

//importation of image
import cloud from '../../assets/img/cloud.png'
import inventaire from '../../assets/img/inventaire.png'
import meeting from '../../assets/img/meeting.png'
import money from '../../assets/img/money.png'

    

function CustomImage(props){    
    return(
        <View style={intro.container}>
            <Image source={cloud} style={intro.cloud}/>
            <Image source={props.image} style={intro.image}/>
        </View>
        
    );
} 

export default function Intro({navigation}){
    return(
        <>
         <StatusBar 
            barStyle="dark-content"
            backgroundColor={'#d8dce4'}/>
        <Onboarding
            onDone={() => navigation.navigate('auth')}
            pages={[
                {
                    backgroundColor: '#EBF2FA',
                    image: <CustomImage image={inventaire} />,
                    title: "Gérer votre inventaire",
                    titleStyles: intro.title,
                    subtitle: ''
                },
                {
                    backgroundColor: '#EBF2FA',
                    image: <CustomImage image={meeting} />,
                    title: "Administrer les contacts de vos fournisseurs",
                    titleStyles: intro.title,
                    subtitle: ''
                },
                {
                    backgroundColor: '#EBF2FA',
                    image: <CustomImage image={money} />,
                    title: "Gouverner vos bénéfices et dépenses",
                    titleStyles: intro.title,
                    subtitle: ''
                },
            ]}/>
        </>
       
    );
}




