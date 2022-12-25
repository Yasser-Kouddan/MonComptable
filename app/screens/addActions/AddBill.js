import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { styles } from './styles'

export default function AddBill({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Ajouter une facture</Text>
                <TextInput
                  placeholder='Titre'
                  />
            </View>
        </View>
    );
}
